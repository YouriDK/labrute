import { BARE_HANDS_DAMAGE, BASE_FIGHTER_STATS, NO_WEAPON_TOSS, PERKS_TOTAL_ODDS, Weapon, WeaponTypeColor } from '@labrute/core';
import { Box, Tooltip, TooltipProps, useTheme } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Text';
import StatColor from '../../utils/StatColor';

const textShadowBase = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
const textProps = {
  fontSize: 12,
  lineHeight: 1.2,
} as const;

export interface WeaponTooltipProps extends Omit<TooltipProps, 'title'> {
  weapon?: Weapon;
  bareHands?: boolean;
}

const WeaponTooltip = ({
  weapon,
  bareHands,
  children,
  ...rest
}: WeaponTooltipProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const textShadow = useMemo(() => (theme.palette.mode === 'dark' ? textShadowBase : undefined), [theme.palette.mode]);

  return (
    <Tooltip
      {...rest}
      title={(weapon || bareHands) ? (
        <>
          <Box sx={{ textAlign: 'center', my: 0.5 }}>
            {/* NAME */}
            <Text bold h5>{t(weapon ? weapon.name : 'bareHands')}</Text>
            {/* ILLUSTRATION */}
            {weapon && (
              <Box
                component="img"
                src={`/images/weapons/${weapon.name}.png`}
                sx={{ display: 'inline-block', filter: 'drop-shadow(2px 2px 2px #000)' }}
              />
            )}
          </Box>
          {/* TYPES */}
          {weapon && (
            <Text {...textProps}>
              {t('types')}:
              {' '}
              {weapon.types.map((type, index) => (
                <Fragment key={type}>
                  <Text
                    component="span"
                    bold
                    sx={{
                      color: WeaponTypeColor[type],
                      textTransform: 'capitalize',
                      textShadow,
                    }}
                    {...textProps}
                  >
                    {t(type)}
                  </Text>
                  {index < weapon.types.length - 1 && ', '}
                </Fragment>
              ))}
            </Text>
          )}
          {/* ODDS */}
          {weapon && (
            <Text {...textProps}>
              {t('odds')}:
              {' '}
              <Text bold component="span" sx={{ opacity: 0.7 }} {...textProps}>
                {((weapon.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%
              </Text>
            </Text>
          )}
          {/* HIT SPEED */}
          <Text {...textProps}>
            {t('hitSpeed')}:
            {' '}
            <Text component="span" bold sx={{ opacity: 0.7 }} {...textProps}>
              {Math.round(
                (BASE_FIGHTER_STATS.tempo
                / (weapon ? weapon.tempo : BASE_FIGHTER_STATS.tempo)) * 100
              )}%
            </Text>
          </Text>
          {/* DAMAGE */}
          <Text {...textProps}>
            {t('damage')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.damage, textShadow }} {...textProps}>
              {weapon ? weapon.damage : BARE_HANDS_DAMAGE}
            </Text>
          </Text>
          {/* DRAW CHANCE */}
          {weapon && (
            <Text {...textProps}>
              {t('drawChance')}:
              {' '}
              <Text component="span" bold sx={{ opacity: 0.7 }} {...textProps}>
                {Math.round((weapon.toss / (NO_WEAPON_TOSS + weapon.toss)) * 100)}%
              </Text>
            </Text>
          )}
          {/* REACH */}
          {weapon && (
            <Text {...textProps}>
              {t('reach')}:
              {' '}
              <Text component="span" bold sx={{ opacity: 0.7 }} {...textProps}>
                {weapon.reach}
              </Text>
            </Text>
          )}
          {/* REVERSAL */}
          {(!!weapon?.reversal || (bareHands && !!BASE_FIGHTER_STATS.reversal)) && (
            <Text bold sx={{ color: StatColor.reversal, textShadow }} {...textProps}>
              {(weapon ? weapon.reversal : BASE_FIGHTER_STATS.reversal) > 0 && '+'}
              {Math.round((weapon ? weapon.reversal : BASE_FIGHTER_STATS.reversal) * 100)}
              % {t('reversal')}
            </Text>
          )}
          {/* EVASION */}
          {(!!weapon?.evasion || (bareHands && !!BASE_FIGHTER_STATS.evasion)) && (
            <Text bold sx={{ color: StatColor.evasion, textShadow }} {...textProps}>
              {(weapon ? weapon.evasion : BASE_FIGHTER_STATS.evasion) > 0 && '+'}
              {Math.round((weapon ? weapon.evasion : BASE_FIGHTER_STATS.evasion) * 100)}
              % {t('evasion')}
            </Text>
          )}
          {/* SWIFTNESS */}
          {(!!weapon?.swiftness || (bareHands && !!BASE_FIGHTER_STATS.swiftness)) && (
            <Text bold sx={{ color: StatColor.swiftness, textShadow }} {...textProps}>
              {(weapon ? weapon.swiftness : BASE_FIGHTER_STATS.swiftness) > 0 && '+'}
              {Math.round((weapon ? weapon.swiftness : BASE_FIGHTER_STATS.swiftness) * 100)}
              % {t('swiftness')}
            </Text>
          )}
          {/* BLOCK */}
          {(!!weapon?.block || (bareHands && !!BASE_FIGHTER_STATS.block)) && (
            <Text bold sx={{ color: StatColor.block, textShadow }} {...textProps}>
              {(weapon ? weapon.block : BASE_FIGHTER_STATS.block) > 0 && '+'}
              {Math.round((weapon ? weapon.block : BASE_FIGHTER_STATS.block) * 100)}
              % {t('block')}
            </Text>
          )}
          {/* ACCURACY */}
          {(!!weapon?.accuracy || (bareHands && !!BASE_FIGHTER_STATS.accuracy)) && (
            <Text bold sx={{ color: StatColor.accuracy, textShadow }} {...textProps}>
              {(weapon ? weapon.accuracy : BASE_FIGHTER_STATS.accuracy) > 0 && '+'}
              {Math.round((weapon ? weapon.accuracy : BASE_FIGHTER_STATS.accuracy) * 100)}
              % {t('accuracy')}
            </Text>
          )}
          {/* DISARM */}
          {(!!weapon?.disarm || (bareHands && !!BASE_FIGHTER_STATS.disarm)) && (
            <Text bold sx={{ color: StatColor.disarm, textShadow }} {...textProps}>
              {(weapon ? weapon.disarm : BASE_FIGHTER_STATS.disarm) > 0 && '+'}
              {Math.round((weapon ? weapon.disarm : BASE_FIGHTER_STATS.disarm) * 100)}
              % {t('disarm')}
            </Text>
          )}
          {/* COMBO */}
          {(!!weapon?.combo || (bareHands && !!BASE_FIGHTER_STATS.combo)) && (
            <Text bold sx={{ color: StatColor.combo, textShadow }} {...textProps}>
              {(weapon ? weapon.combo : BASE_FIGHTER_STATS.combo) > 0 && '+'}
              {Math.round((weapon ? weapon.combo : BASE_FIGHTER_STATS.combo) * 100)}
              % {t('combo')}
            </Text>
          )}
        </>
      ) : ''}
      componentsProps={{
        tooltip: {
          sx: {
            minHeight: 68,
          }
        },
        popper: { sx: { width: 250 } },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default WeaponTooltip;
