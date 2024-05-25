import React from 'react';
import BoxBg, { BoxBgProps } from '../BoxBg';
import Text from '../Text';

interface BruteHPProps extends Omit<BoxBgProps, 'src'> {
  hp: number;
}

const BruteHP = ({ hp, sx, ...rest }: BruteHPProps) => (
  <BoxBg
    sx={{ textAlign: 'center', pt: '5px', width: 39, height: 29, display: 'inline-block', ...sx }}
    {...rest}
    src="/images/hp.webp"
  >
    <Text bold color="common.white">{hp}</Text>
  </BoxBg>
);

export default BruteHP;
