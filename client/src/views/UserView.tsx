import { AchievementData, TitleRequirements, UserGetProfileResponse, formatLargeNumber, getFightsLeft } from '@labrute/core';
import { Check, QuestionMark } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemText, ListSubheader, Paper, Tooltip, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import BruteButton from '../components/Brute/BruteButton';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import { AchievementTooltip } from '../components/AchievementTooltip';

const UserView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { userId } = useParams();
  const Alert = useAlert();
  const { user: authedUser, updateData } = useAuth();

  const [user, setUser] = useState<UserGetProfileResponse | null>(null);

  // Fetch user profile
  useEffect(() => {
    if (!userId) {
      return;
    }

    Server.User.getProfile(userId).then((profile) => {
      setUser(profile);
    }).catch(catchError(Alert));
  }, [Alert, userId]);

  const getDinoRpgReward = useCallback(() => {
    if (!authedUser) return;

    Server.User.getDinoRpgRewards().then(() => {
      Alert.open('success', t('dinoRpgRewardsSuccess'));
      updateData((data) => (data ? ({
        ...data,
        dinorpgDone: new Date(),
        brutes: data.brutes.map((brute) => ({
          ...brute,
          fightsLeft: getFightsLeft(brute) + 1,
          lastFight: new Date(),
        })),
      }) : null));
    }).catch(catchError(Alert));
  }, [Alert, authedUser, t, updateData]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      {user && (
        <>
          <Paper sx={{ mx: 4 }}>
            <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('userProfile', { user: user.name })}</Text>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
            {/* ACHIEVEMENTS */}
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    bgcolor: 'background.paperDark',
                    textAlign: 'center',
                    p: 1,
                    borderRadius: 0,
                  }}
                >
                  <Text bold h6>{t('achievements')}</Text>
                  <Box sx={{
                    mt: 1,
                    bgcolor: 'background.paperLight',
                    border: '1px solid',
                    borderColor: theme.palette.border.shadow,
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    px: 0.25,
                  }}
                  >
                    {user.achievements.map((achievement) => (
                      <AchievementTooltip key={achievement.name} achievement={achievement}>
                        <Box
                          sx={{
                            width: 40,
                            pt: 0.5,
                            mx: 0.25,
                            my: 0.5,
                            textAlign: 'center',
                            borderRadius: 1,
                            border: 1,
                            borderColor: `achievements.${AchievementData[achievement.name].rarety}.main`,
                            bgcolor: `achievements.${AchievementData[achievement.name].rarety}.light`,
                            color: `achievements.${AchievementData[achievement.name].rarety}.contrastText`,
                          }}
                        >
                          {AchievementData[achievement.name].illustration ? (
                            <Box component="img" src={`/images/achievements/${AchievementData[achievement.name].illustration || ''}`} sx={{ maxWidth: 34 }} />
                          ) : (
                            <QuestionMark />
                          )}
                          <Text bold>{formatLargeNumber(achievement.count)}</Text>
                        </Box>
                      </AchievementTooltip>
                    ))}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    bgcolor: 'background.paperDark',
                    textAlign: 'center',
                    p: 1,
                    borderRadius: 0,
                    maxHeight: 500,
                    overflow: 'auto',
                  }}
                >
                  <Text bold h6>{t('titles')}</Text>
                  <Box sx={{
                    mt: 1,
                    bgcolor: 'background.paperLight',
                    border: '1px solid',
                    borderColor: theme.palette.border.shadow,
                    textAlign: 'left',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                  >
                    {user.achievements.map((achievement) => {
                      const availableTitles = TitleRequirements[achievement.name]
                        .filter((title) => title <= achievement.count);

                      if (availableTitles.length === 0) {
                        return null;
                      }

                      return (
                        <List
                          key={achievement.name}
                          dense
                          sx={{ width: 1, py: 0 }}
                          subheader={(
                            <AchievementTooltip achievement={achievement}>
                              <ListSubheader sx={{
                                display: 'flex',
                                alignItems: 'center',
                                py: 0.5,
                                bgcolor: 'secondary.main',
                              }}
                              >
                                <Box
                                  component="img"
                                  src={`/images/achievements/${AchievementData[achievement.name].illustration || ''}`}
                                  sx={{ width: 20 }}
                                />
                                <Text smallCaps bold color="secondary.contrastText" sx={{ ml: 1 }}>{t(`achievements.${achievement.name}`)}</Text>
                              </ListSubheader>
                            </AchievementTooltip>
                          )}
                        >
                          {availableTitles.map((titleCount, i) => (
                            <Tooltip key={titleCount} title={`${t(`achievements.${achievement.name}`)} x ${titleCount}`}>
                              <ListItem sx={{
                                py: 0,
                                '&:not(:last-child)': {
                                  borderBottom: '1px dashed',
                                  borderBottomColor: theme.palette.border.shadow,
                                },
                              }}
                              >
                                <ListItemText
                                  sx={{ my: 0 }}
                                  primary={(
                                    <>
                                      <span>{t(`${achievement.name}.title.${(i + 1) as 1 | 2 | 3 | 4 | 5}`) || 'TODO'}</span>
                                      <Box component="span" sx={{ ml: 0.5, color: 'text.secondary' }}>(x{titleCount})</Box>
                                    </>
                                  )}
                                />
                              </ListItem>
                            </Tooltip>
                          ))}
                        </List>
                      );
                    })}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            {/* REWARDS */}
            {user.id === authedUser?.id && (
              <>
                <Text bold center smallCaps h4 sx={{ mt: 2, ml: 1 }}>{t('externalRewards')}</Text>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <FantasyButton
                    onClick={getDinoRpgReward}
                    color="success"
                    disabled={moment.utc(authedUser.dinorpgDone).isSame(moment.utc(), 'day')}
                    sx={{ m: 1 }}
                  >
                    <Check sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {t('eternalDinoRPG')}
                  </FantasyButton>
                </Box>
              </>
            )}
            {/* BRUTES */}
            <Text bold center smallCaps h4 sx={{ mt: 2, ml: 1 }}>{t('brutes')}</Text>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              bgcolor: 'background.paperLight',
            }}
            >
              {user && user.brutes.map((brute) => (
                <BruteButton key={brute.id} brute={brute} />
              ))}
            </Box>
          </Paper>
        </>
      )}
    </Page>
  );
};

export default UserView;
