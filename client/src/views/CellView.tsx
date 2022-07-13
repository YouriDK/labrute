import { Box, Grid, Link, Paper, Tooltip } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import BoxWithBackground from '../components/BoxWithBackground';
import CellWeapons from '../components/CellWeapons';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import adjustColor from '../utils/adjustColor';
import advertisings from '../utils/advertisings';
import colors from '../utils/brute/colors';

interface Log {
  id: number;
  type: 'win' | 'lose' | 'child' | 'childup'
  | 'up' | 'lvl_0' | 'lvl_1' | 'lvl_2' | 'lvl_3'
  | 'lvl_4' | 'lvl_5' | 'lvl_6' | 'lvl_7'
  | 'lvl_8' | 'lvl_9' | 'lvl_10' | 'survive';
  value?: string;
  xp?: number;
}

const logs: Log[] = [
  { id: 1, type: 'win', value: 'test1', xp: 2 },
  { id: 2, type: 'survive', value: 'test10', },
  { id: 3, type: 'lose', value: 'test2', xp: 1 },
  { id: 4, type: 'child', value: 'test3' },
  { id: 5, type: 'childup', value: 'test4' },
  { id: 6, type: 'up' },
  { id: 7, type: 'lvl_10' },
];

/**
 * CellView component
 */
const CellView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();

  // const { data: brute } = useStateAsync(null, Server.Brute.get, bruteName);
  const [brute] = useState({
    id: 1,
    name: 'Brute',
    gender: 'female',
    body: {
      longHair: 1,
      lowerRightArm: 0,
      rightHand: 0,
      upperRightArm: 0,
      rightShoulder: 0,
      rightFoot: 0,
      lowerRightLeg: 0,
      upperRightLeg: 0,
      leftFoot: 0,
      lowerLeftLeg: 0,
      pelvis: 0,
      upperLeftLeg: 0,
      tummy: 0,
      torso: 0,
      head: 0,
      leftHand: 0,
      upperLeftArm: 0,
      lowerLeftArm: 0,
      leftShoulder: 0,
    },
    colors: {
      skin: {
        color: colors.female.skin[0],
        shade: adjustColor(colors.female.skin[0], -20),
      },
      hair: {
        color: colors.female.hair[0],
        shade: adjustColor(colors.female.hair[0], -20),
      },
      primary: {
        color: colors.female.clothing[0],
        shade: adjustColor(colors.female.clothing[0], -20),
      },
      secondary: {
        color: colors.female.clothing[1],
        shade: adjustColor(colors.female.clothing[1], -20),
      },
      accent: {
        color: colors.female.clothing[2],
        shade: adjustColor(colors.female.clothing[2], -20),
      },
    },
    master: {
      id: 999,
      name: 'BigBoss'
    }
  });

  // Randomized advertising
  const advertising = useMemo(() => advertisings[Math.floor(
    Math.random() * (advertisings.length - 1) + 1
  )], []);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
      <Box display="flex" zIndex={1} sx={{ mt: 2 }}>
        {/* BRUTE NAME + SOCIALS */}
        <Paper sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          ml: 3,
          mr: 1,
          flexGrow: 1,
          py: 0,
          px: 1,
          mb: '5px',
        }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Text h2 sx={{ fontVariant: 'small-caps' }}>{bruteName}</Text>
            </Grid>
            <Grid item xs={3}>
              <Box>
                {brute.master ? (
                  <>
                    <Text bold color="secondary" component="span">{t('master')}: </Text>
                    <Text bold component="span">XXXXX</Text>
                  </>
                ) : <Text>{' '}</Text>}
              </Box>
              <Box>
                <Text bold color="secondary" component="span">{t('ranking')}: </Text>
                <Text bold component="span">33333</Text>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Text bold color="secondary" component="span">{t('victories')}: </Text>
                <Text bold component="span">1540</Text>
              </Box>
              <Box>
                <Text bold color="secondary" component="span">{t('pupils')}: </Text>
                <Text bold component="span">300</Text>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottom: 'none',
          width: 270,
          bgcolor: 'background.paperLight',
        }}
        />
      </Box>
      <Paper sx={{
        borderTopRightRadius: 0,
        bgcolor: 'background.paperLight',
        zIndex: 2,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -9,
          right: 0,
          width: 302,
          height: '9px',
          bgcolor: 'background.paperLight',
        },
      }}
      >
        <Box display="flex">
          {/* MAIN */}
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Box sx={{ width: 315 }}>
              <Text bold sx={{ textAlign: 'center' }}>{t('weaponsBonuses')}</Text>
              <CellWeapons weapons={[]} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              Yo
            </Box>
          </Box>
          {/* RIGHT SIDE */}
          <Box sx={{
            position: 'relative',
            width: 270,
            mt: -5,
          }}
          >
            <Tooltip title="Donne cette adresse à tes amis ou met la sur ton blog, ça te permettra de recruter des élèves et de gagner de l'expérience !">
              <Paper sx={{
                mx: 0,
                p: 1,
                bgcolor: 'background.paperAccent',
                textAlign: 'center'
              }}
              >
                <Text bold>{`${window.location.origin}?ref=${bruteName}`}</Text>
              </Paper>
            </Tooltip>

            <StyledButton
              image="/images/button.gif"
              imageHover="/images/button-hover.gif"
              shadow={false}
              contrast={false}
              sx={{
                fontVariant: 'small-caps',
                m: '0 auto',
                mt: 2,
                height: 56,
                width: 246,
              }}
            >
              Clan TEST
            </StyledButton>
            <BoxWithBackground
              url="/images/cell-advert-bg.gif"
              alt={t('background')}
              sx={{
                width: 300,
                height: 205,
                ml: 0.5,
              }}
            >
              <Tooltip title="TODO" key={advertising}>
                <Link href="" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${advertising}`}
                    sx={{ ml: 1, mt: 3.5 }}
                  />
                </Link>
              </Tooltip>
            </BoxWithBackground>
            <Box sx={{ ml: 2, mt: 1 }}>
              {logs.map((log) => (
                <BoxWithBackground
                  key={log.id}
                  url={`/images/log/log_${log.type === 'survive' ? 'win' : log.type}.gif`}
                  alt={t('background')}
                  sx={{
                    width: 200,
                    height: 53,
                    pl: '50px',
                    pt: 0.5,
                  }}
                >
                  {log.type === 'survive' || log.type === 'win' || log.type === 'lose'
                    ? (
                      <Tooltip title={t('seeFight')}>
                        <Link
                          href=""
                          sx={{
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline',
                              textDecorationColor: (theme) => (log.type === 'lose'
                                ? theme.palette.error.main
                                : theme.palette.success.main
                              ),
                            },
                          }}
                        >
                          <Text bold color={log.type === 'lose' ? 'error.main' : 'success.main'}>
                            {t(`log.${log.type}`, { value: log.value })}
                          </Text>
                        </Link>
                      </Tooltip>
                    )
                    : (
                      <Text bold color="success.main">
                        {t(`log.${log.type}`, { value: log.value })}
                      </Text>
                    )}
                  {log.xp && (
                    <Text
                      color={log.type === 'lose' ? 'error.main' : 'success.main'}
                      sx={{
                        fontSize: 10,
                        mt: '-5px',
                      }}
                    >
                      {t(log.xp === 1 ? 'log.xp' : 'log.xps', { xp: log.xp })}
                    </Text>
                  )}
                </BoxWithBackground>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Page>
  );
};

export default CellView;
