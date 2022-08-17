/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface TrappedMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const TrappedMaleBrute_WIDTH = 171.65;
export const TrappedMaleBrute_HEIGHT = 144.8;
export const TrappedMaleBrute_FRAMES = 43;
export const TrappedMaleBrute_X_OFFSET = 55.9;
export const TrappedMaleBrute_Y_OFFSET = 126.8;
export const TrappedMaleBrute_MARGIN = 30;

const TrappedMaleBrute = ({ id, inverted, sx, ...rest }: TrappedMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: TrappedMaleBrute_WIDTH,
      height: TrappedMaleBrute_HEIGHT,
      ...sx,
    }}
    {...rest}
  >
    <Box
      component="svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: 'absolute',
        top: 0,
        left: inverted
          ? -(TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN)
            * (TrappedMaleBrute_FRAMES - 1)
            - TrappedMaleBrute_MARGIN
          : 0,
        width: (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * TrappedMaleBrute_FRAMES,
        animation: `TrappedMaleBrute${inverted ? 'Inverted' : ''} 1.07s steps(${TrappedMaleBrute_FRAMES}, jump-none) forwards`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 0}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(0.4893, 0.8705, -0.8705, 0.4893, 20.5234, -92.1433)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 1}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.343, 0.2028, 0.2017, 0.3414, 21.5965, -48.4032)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3805, -0.1204, 0.1197, 0.3791, 3.801, -31.2671)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3899, -0.0777, 3.795, -41.5942)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3515, 0.1837, 0.1845, 0.3533, 15.8533, -46.9104)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3972, -0.009, 0.0105, 0.399, 8.8704, -12.8988)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3923, 0.0468, 0.0303, 0.2466, 24.8606, -18.8188)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1146, 0.3791, 0.3776, 0.1159, 2.9111, -26.7573)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.3975, 0.0125, 0.0126, 0.3995, 10.5054, -27.9171)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.2993, -0.2589, -0.164, 0.1912, 1.4684, -16.8565)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3508, -0.1872, -0.2014, 0.3445, 15.9909, -21.2947)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3508, -0.1872, -0.1862, 0.3526, 21.0679, -28.6438)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3327, -0.0528, -0.0512, 0.3327, 32.4787, -60.9531)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3708, -0.1464, -0.1443, 0.3696, -10.8972, -29.6768)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.0074, -0.3995, -0.3979, 0.007, 0.8375, -25.9641)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.0984, -0.3865, -0.3846, 0.0979, 9.9729, -27.0611)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.203, -0.3436, -0.342, 0.2019, 7.4445, -25.5711)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.3972, -0.0126, -0.0126, 0.3992, -5.7829, -8.6144)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.3491, -0.1861, -0.187, 0.3508, 0.9543, -13.1887)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(0.6655, 0.7427, -0.7262, 0.6858, 2.9491, -88.0337)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 2}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2928, 0.2741, 0.2677, 0.2884, 17.8588, -47.7969)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3462, -0.2024, 0.1949, 0.3436, 3.2337, -27.2327)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0814, 0.3905, 0.39, -0.0727, 2.7568, -39.6816)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3365, 0.2046, 0.2058, 0.3446, 13.7159, -45.5145)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3924, -0.0396, 0.0423, 0.3997, 9.3722, -12.2533)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3845, 0.0768, 0.05, 0.2452, 24.6428, -19.1976)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.083, 0.3891, 0.3833, 0.0887, 2.5028, -25.5344)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.3909, 0.0535, 0.0544, 0.3988, 9.4485, -27.2405)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3306, -0.2135, -0.131, 0.2088, 1.622, -16.4334)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3658, -0.152, -0.1632, 0.3659, 15.5687, -20.9722)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3658, -0.1519, -0.1473, 0.3725, 19.8996, -28.6567)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3334, -0.0499, -0.0427, 0.3336, 29.6558, -59.7696)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3685, -0.1588, -0.1542, 0.3623, -11.7887, -26.9091)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.0335, -0.4005, -0.3945, 0.028, 0.075, -23.9286)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.1227, -0.3825, -0.3756, 0.1188, 9.0399, -25.4294)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2149, -0.3396, -0.3338, 0.2095, 6.7821, -23.4507)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.3933, 0.0276, 0.0282, 0.4012, -4.132, -9.0541)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.3729, -0.1232, -0.1258, 0.3803, 1.2944, -14.1168)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(0.8088, 0.584, -0.5428, 0.8409, -14.0555, -81.1307)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 3}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.1783, 0.3644, 0.3476, 0.174, 11.153, -45.4173)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2526, -0.3161, 0.298, 0.2531, 3.8902, -21.0319)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0835, 0.3914, 0.39, -0.0656, 1.0649, -36.5103)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3102, 0.2348, 0.2408, 0.327, 9.8646, -42.8681)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3796, -0.0877, 0.0968, 0.3947, 10.1854, -11.0036)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3665, 0.1246, 0.0826, 0.2393, 24.3161, -19.7341)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0282, 0.3999, 0.3888, 0.0413, 1.9562, -23.281)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.3708, 0.1189, 0.1227, 0.3882, 7.7024, -25.844)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3675, -0.1307, -0.0727, 0.226, 1.8241, -15.7844)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.383, -0.0905, -0.0944, 0.3922, 14.6677, -20.513)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, -0.0905, -0.0789, 0.3959, 17.4273, -28.667)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3346, -0.0443, -0.0294, 0.3346, 25.1342, -57.6405)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3635, -0.18, -0.1691, 0.3499, -12.9978, -22.3395)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.0775, -0.3984, -0.3864, 0.0634, -1.0981, -20.6409)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.1626, -0.3726, -0.3578, 0.1526, 7.4493, -23.0343)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.235, -0.3318, -0.3183, 0.2235, 5.7255, -20.1646)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.3774, 0.0944, 0.0988, 0.3946, -1.7004, -9.6221)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.388, -0.0122, -0.0146, 0.4055, 1.0295, -15.4743)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(0.9149, 0.3993, -0.3315, 0.9468, -29.8917, -71.5523)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 4}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.02, 0.412, 0.3821, -0.0119, 2.4313, -38.8163)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.066, -0.4048, 0.3774, 0.0804, 7.5019, -14.0074)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0872, 0.3925, 0.3896, -0.0552, -1.2558, -32.0441)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2676, 0.2733, 0.2875, 0.2962, 4.4825, -38.9037)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3523, -0.15, 0.1716, 0.3754, 11.6281, -9.1817)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3322, 0.1847, 0.1271, 0.2237, 23.5077, -20.2412)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0496, 0.4017, 0.3867, -0.0222, 0.9944, -19.8728)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.3256, 0.2002, 0.215, 0.3535, 4.7491, -23.2747)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3851, -0.0071, 0.007, 0.2247, 1.5705, -14.9006)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.39, -0.0021, 0.0057, 0.4072, 12.7455, -19.6563)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3899, -0.0021, 0.0231, 0.4073, 13.3027, -28.3456)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3361, -0.0372, -0.0105, 0.3351, 18.7374, -54.7231)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3537, -0.211, -0.1883, 0.3319, -14.9607, -15.9502)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1376, -0.3877, -0.3695, 0.1115, -3.0281, -16.234)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.218, -0.3512, -0.3274, 0.1972, 5.0157, -19.6563)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.262, -0.3195, -0.2972, 0.2396, 4.1714, -15.3931)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.3367, 0.1797, 0.1959, 0.3638, 1.4661, -9.9348)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.356, 0.1353, 0.1431, 0.3866, -0.2769, -16.8013)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(0.9788, 0.2003, -0.1052, 1.0001, -43.966, -59.7995)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 5}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2718, 0.3211, 0.2913, -0.2336, -5.8389, -25.9313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1994, -0.3661, 0.3456, -0.1554, 14.7375, -10.1244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0923, 0.3942, 0.3888, -0.0432, -4.2456, -26.313)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2083, 0.3115, 0.3423, 0.2471, -2.5687, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3026, -0.2213, 0.2624, 0.3301, 13.4576, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.2746, 0.2506, 0.1807, 0.1914, 21.9703, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1514, 0.3811, 0.3682, -0.1039, -0.0816, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.243, 0.2842, 0.3188, 0.2784, 0.6819, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3493, 0.1456, 0.0962, 0.1848, 0.5617, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3699, 0.1069, 0.1393, 0.3876, 9.4616, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3699, 0.1069, 0.1546, 0.3832, 6.8793, -26.8378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3378, -0.0291, 0.0125, 0.3342, 10.5552, -50.6685)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3386, -0.2492, -0.2109, 0.3076, -17.4369, -7.7244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2135, -0.3608, -0.3398, 0.1686, -5.6374, -10.7564)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.285, -0.3123, -0.2817, 0.2461, 1.7586, -15.4259)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2966, -0.3007, -0.2684, 0.2592, 2.1395, -9.3232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2574, 0.27, 0.3062, 0.291, 5.2268, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2377, 0.2867, 0.3207, 0.2734, -3.281, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.1245, 1.0, -55.9226, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 6}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2587, 0.3212, 0.3001, -0.2333, -4.265, -25.9913)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1837, -0.3668, 0.3514, -0.155, 15.521, -10.153)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0755, 0.3951, 0.3904, -0.0429, -2.73, -26.3855)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2194, 0.312, 0.3322, 0.2467, -0.829, -33.3157)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.311, -0.2207, 0.2493, 0.33, 14.2163, -6.7094)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.2841, 0.2503, 0.1729, 0.1913, 23.3346, -20.3878)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1356, 0.3817, 0.372, -0.1035, 1.0571, -15.2631)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.253, 0.2846, 0.3075, 0.2781, 1.9659, -18.9369)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3546, 0.1454, 0.0885, 0.185, 1.6012, -13.1239)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.374, 0.1059, 0.123, 0.3884, 10.6734, -17.9205)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.374, 0.1059, 0.1384, 0.3839, 8.4567, -26.8163)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3367, -0.0283, -1.0E-4, 0.3349, 12.9945, -50.7594)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3286, -0.2487, -0.2223, 0.3078, -16.6363, -7.7331)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1987, -0.3611, -0.3463, 0.1677, -4.7392, -10.7343)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2723, -0.3122, -0.2912, 0.2455, 2.8428, -15.4664)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2841, -0.3008, -0.2784, 0.2587, 2.9407, -9.3021)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.267, 0.2703, 0.2944, 0.2907, 6.1279, -9.3523)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2482, 0.2868, 0.3098, 0.2729, -2.1235, -17.0199)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0711, 1.0025, -52.8476, -46.4738)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 7}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2427, 0.3212, 0.3117, -0.2335, -2.3639, -25.9358)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1657, -0.3668, 0.3593, -0.1548, 16.7009, -10.0564)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0559, 0.3952, 0.3926, -0.0431, -0.7669, -26.3863)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2356, 0.3117, 0.32, 0.2466, 1.458, -33.3034)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3216, -0.2216, 0.2322, 0.3305, 15.2981, -6.7049)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.2968, 0.2502, 0.1629, 0.1917, 24.8534, -20.3871)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1169, 0.3818, 0.3773, -0.1032, 2.4475, -15.3148)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2681, 0.284, 0.2929, 0.2789, 3.5237, -18.9869)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3621, 0.145, 0.079, 0.1852, 2.8739, -13.1189)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3794, 0.1057, 0.1042, 0.3884, 12.1536, -17.9149)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3794, 0.1057, 0.1196, 0.384, 10.4359, -26.7604)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3352, -0.0282, -0.0164, 0.3351, 16.2385, -50.8263)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3155, -0.2495, -0.2374, 0.3081, -15.6659, -7.7231)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1806, -0.3613, -0.3547, 0.1679, -3.6283, -10.7339)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2563, -0.3126, -0.303, 0.2462, 4.2063, -15.4233)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2693, -0.3006, -0.2913, 0.2589, 4.0854, -9.3146)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2809, 0.2701, 0.2797, 0.291, 7.1679, -9.352)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2622, 0.2872, 0.2953, 0.2738, -0.6294, -16.9822)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0224, 1.0025, -49.9094, -46.4738)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 8}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2234, 0.3211, 0.3266, -0.2336, -0.0299, -25.9313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1442, -0.3661, 0.3691, -0.1554, 18.1311, -10.1244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0328, 0.3942, 0.3954, -0.0432, 1.6077, -26.313)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2553, 0.3115, 0.305, 0.2471, 4.3555, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.336, -0.2213, 0.2126, 0.3301, 16.4118, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3124, 0.2506, 0.1518, 0.1914, 26.9147, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0939, 0.3811, 0.3839, -0.1039, 4.1168, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2859, 0.2842, 0.2768, 0.2784, 5.4713, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3713, 0.1456, 0.0684, 0.1848, 4.4702, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.386, 0.1069, 0.0808, 0.3876, 14.022, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.386, 0.1069, 0.0968, 0.3832, 12.8351, -26.8378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3334, -0.0291, -0.0379, 0.3342, 20.126, -50.6685)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.301, -0.2492, -0.2574, 0.3076, -14.3452, -7.7244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1591, -0.3608, -0.3652, 0.1686, -2.1031, -10.7564)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2379, -0.3123, -0.3188, 0.2461, 6.0012, -15.4259)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2512, -0.3007, -0.3075, 0.2592, 5.4587, -9.3232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2981, 0.27, 0.2623, 0.291, 8.5187, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2809, 0.2867, 0.2794, 0.2734, 1.2132, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0264, 1.0, -47.0217, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 9}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2253, 0.3208, 0.3247, -0.2327, -0.3506, -25.9412)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1464, -0.3658, 0.3677, -0.1547, 17.9749, -10.0915)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0348, 0.3942, 0.395, -0.0419, 1.3221, -26.2829)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2526, 0.3109, 0.3064, 0.2467, 3.9972, -33.2829)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3336, -0.2213, 0.2147, 0.3297, 16.2658, -6.6986)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3102, 0.25, 0.1528, 0.1912, 26.6454, -20.3289)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0956, 0.3811, 0.383, -0.103, 3.9372, -15.3029)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2829, 0.284, 0.2787, 0.2777, 5.2202, -18.9657)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3701, 0.1445, 0.0693, 0.1847, 4.3029, -13.112)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3849, 0.1069, 0.0828, 0.3876, 13.8142, -17.9402)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3848, 0.1068, 0.0993, 0.383, 12.543, -26.881)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3337, -0.0281, -0.0352, 0.3342, 19.6754, -50.7239)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3027, -0.2485, -0.2544, 0.3073, -14.5325, -7.7347)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1611, -0.3606, -0.3636, 0.1681, -2.2876, -10.7518)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.24, -0.3118, -0.3164, 0.2458, 5.6946, -15.4309)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.253, -0.3003, -0.3049, 0.2589, 5.2447, -9.3314)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2956, 0.2695, 0.2645, 0.2902, 8.3308, -9.3276)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.278, 0.2865, 0.2812, 0.2728, 0.9473, -17.0127)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0175, 1.0, -47.5341, -46.4009)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 10}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2278, 0.321, 0.3224, -0.233, -0.6782, -25.9414)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1499, -0.3657, 0.3665, -0.1543, 17.7626, -10.1505)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0383, 0.3942, 0.3947, -0.0419, 0.9576, -26.3328)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2501, 0.3108, 0.3087, 0.2465, 3.5742, -33.2743)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3321, -0.2206, 0.2172, 0.33, 16.1035, -6.7111)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3078, 0.2502, 0.1543, 0.1913, 26.3679, -20.3353)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.099, 0.3811, 0.3821, -0.1029, 3.7236, -15.3524)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2805, 0.284, 0.2812, 0.2777, 4.9195, -18.965)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3685, 0.1454, 0.0711, 0.1846, 4.077, -13.173)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.384, 0.1067, 0.0863, 0.3875, 13.5971, -17.9337)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.384, 0.1067, 0.1028, 0.3829, 12.1897, -26.8236)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3339, -0.0281, -0.0323, 0.3342, 19.0628, -50.7231)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3051, -0.2483, -0.2519, 0.3072, -14.6584, -7.7868)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1646, -0.3604, -0.3623, 0.1677, -2.4847, -10.7487)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2424, -0.312, -0.3141, 0.246, 5.4474, -15.4319)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2555, -0.3004, -0.3025, 0.2591, 5.0713, -9.331)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2931, 0.2696, 0.2669, 0.2903, 8.1379, -9.3305)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2755, 0.2864, 0.2836, 0.2728, 0.7367, -17.0119)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0087, 1.0, -48.0921, -46.4014)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 11}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, -1.0625, -25.9313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 17.517, -10.1244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3942, 0.3942, -0.0432, 0.5647, -26.313)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 3.1252, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3832, 0.1069, 0.091, 0.3876, 13.219, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3832, 0.1069, 0.1069, 0.3832, 11.7778, -26.8378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 18.441, -50.6685)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3076, -0.2492, -0.2492, 0.3076, -14.8826, -7.7244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1686, -0.3608, -0.3608, 0.1686, -2.728, -10.7564)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2461, -0.3123, -0.3123, 0.2461, 5.2373, -15.4259)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2592, -0.3007, -0.3007, 0.2592, 4.8691, -9.3232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 12}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 13}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 14}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 15}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 16}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 17}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 18}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 19}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 20}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 21}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 22}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.9911, -25.9241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.5647, -10.0923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, 0.5674, -26.2607)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3829, 0.1065, 0.1065, 0.3829, 11.7787, -26.8162)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.3825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.894, -7.7221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1684, -0.3603, -0.3603, 0.1684, -2.7395, -10.7616)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2451, -0.3123, -0.3123, 0.2451, 5.2168, -15.3566)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 4.8898, -9.4572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 23}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, -1.0625, -25.9313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 17.517, -10.1244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3942, 0.3942, -0.0432, 0.5647, -26.313)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 3.1252, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3832, 0.1069, 0.091, 0.3876, 13.219, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3832, 0.1069, 0.1069, 0.3832, 11.7778, -26.8378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 18.441, -50.6685)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3076, -0.2492, -0.2492, 0.3076, -14.8826, -7.7244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1686, -0.3608, -0.3608, 0.1686, -2.728, -10.7564)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2461, -0.3123, -0.3123, 0.2461, 5.2373, -15.4259)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2592, -0.3007, -0.3007, 0.2592, 4.8691, -9.3232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 24}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 0.4089, -27.2741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 18.9647, -11.4423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0976, 0.3839, 0.3839, -0.0976, 0.3724, -25.4605)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3876, 0.0878, 0.0711, 0.3915, 13.6826, -17.6473)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3876, 0.0878, 0.0878, 0.3877, 12.7271, -26.4626)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.9325, -50.975)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.194, -7.5721)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1918, -0.3483, -0.3483, 0.1918, -1.2999, -12.0865)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2297, -0.3238, -0.3238, 0.2297, 5.6338, -15.448)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 5.5898, -9.3072)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0224, 1.0005, -47.2383, -46.4162)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 26 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 25}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 1.8589, -28.6241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 20.4147, -12.7923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1517, 0.3655, 0.3655, -0.1517, 0.3612, -24.6001)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3917, 0.0675, 0.0506, 0.3946, 14.1903, -17.2579)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3917, 0.0675, 0.0675, 0.3917, 13.683, -26.0859)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 19.5325, -51.225)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -13.494, -7.3721)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2156, -0.3339, -0.3339, 0.2156, 0.1613, -13.5156)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2125, -0.3353, -0.3353, 0.2125, 6.0157, -15.4518)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 6.2898, -9.1072)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0482, 1.0005, -45.728, -46.3635)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 27 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 26}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, 3.2875, -30.0813)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 21.867, -14.2744)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.2045, 0.3392, 0.3392, -0.2045, 0.4008, -23.5478)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 3.1252, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3948, 0.0473, 0.0309, 0.3967, 14.7097, -16.8095)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3948, 0.0473, 0.0473, 0.3948, 14.6018, -25.7925)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 20.191, -51.4185)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3076, -0.2492, -0.2492, 0.3076, -12.7826, -7.2244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2399, -0.3175, -0.3175, 0.2399, 1.6002, -14.8941)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.1956, -0.346, -0.346, 0.1956, 6.4375, -15.5284)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2592, -0.3007, -0.3007, 0.2592, 6.9691, -8.8232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0729, 1.0, -44.3002, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 28 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 27}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 0.8589, -28.6741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 19.4647, -12.8923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.155, 0.3642, 0.3642, -0.155, -0.7334, -24.4713)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 2.5103, -33.2365)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.392, 0.0659, 0.0502, 0.3947, 14.2028, -17.2086)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3897, 0.0776, 0.0776, 0.3898, 12.8585, -26.2236)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.2825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3436, -0.1952, -0.1952, 0.3436, -13.1812, -6.4368)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2425, -0.3147, -0.3147, 0.2425, 0.2091, -13.5446)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2378, -0.3176, -0.3176, 0.2378, 5.8256, -16.0947)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.304, -0.2539, -0.2539, 0.304, 5.9187, -11.1675)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, -0.0265, 0.9835, -46.9172, -45.313)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 29 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 28}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -1.5911, -27.2241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.0147, -11.4423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1011, 0.383, 0.383, -0.1011, -1.6327, -25.3384)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 1.8103, -33.1865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.388, 0.0862, 0.0695, 0.3917, 13.7621, -17.5511)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3823, 0.1081, 0.1081, 0.3823, 11.073, -26.6661)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 16.3825, -49.875)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3712, -0.1353, -0.1353, 0.3712, -13.7302, -5.6491)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2466, -0.3115, -0.3115, 0.2466, -1.2585, -12.1739)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2775, -0.2836, -0.2836, 0.2775, 4.9915, -16.6737)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.3426, -0.1986, -0.1987, 0.3426, 4.3541, -13.4179)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0129, 0.9651, -49.3304, -44.3201)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 30 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 29}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, -4.1125, -25.7313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 14.467, -9.9244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3942, 0.3942, -0.0432, -2.4853, -26.113)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 1.0252, -33.158)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3832, 0.1069, 0.091, 0.3876, 13.219, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3722, 0.1401, 0.1401, 0.3722, 9.0063, -27.1579)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 14.441, -48.9185)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3894, -0.0685, -0.0685, 0.3894, -14.5006, -4.8239)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2508, -0.3089, -0.3089, 0.2508, -2.7126, -10.8475)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.3142, -0.2432, -0.2432, 0.3143, 3.9161, -17.2751)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.372, -0.1368, -0.1368, 0.372, 2.0235, -15.7885)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0545, 0.9449, -51.8065, -43.175)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 31 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 30}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -2.5411, -25.8241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 15.9147, -9.9923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, -0.9326, -26.2107)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 2.0603, -33.1365)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3778, 0.1231, 0.1231, 0.3778, 10.4034, -26.9359)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 16.3325, -49.875)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3601, -0.1627, -0.1627, 0.3601, -14.5269, -6.1921)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2111, -0.3368, -0.3368, 0.2111, -2.6853, -10.8344)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2824, -0.2788, -0.2788, 0.2824, 4.695, -16.3231)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.3261, -0.2248, -0.2248, 0.3261, 4.08, -12.575)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0261, 0.9728, -50.2202, -44.7974)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 32 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 31}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, -1.0625, -25.9313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 17.517, -10.1244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3942, 0.3942, -0.0432, 0.5647, -26.313)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 3.1252, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3832, 0.1069, 0.091, 0.3876, 13.219, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3832, 0.1069, 0.1069, 0.3832, 11.7778, -26.8378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 18.441, -50.6685)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3076, -0.2492, -0.2492, 0.3076, -14.8826, -7.7244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1686, -0.3608, -0.3608, 0.1686, -2.728, -10.7564)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2461, -0.3123, -0.3123, 0.2461, 5.2373, -15.4259)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2592, -0.3007, -0.3007, 0.2592, 4.8691, -9.3232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 33 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 32}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -0.2911, -26.5741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 18.2647, -10.7423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0693, 0.3902, 0.3902, -0.0693, 0.4997, -25.9777)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3856, 0.0965, 0.0812, 0.3895, 13.454, -17.7941)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3855, 0.0965, 0.0965, 0.3856, 12.274, -26.6472)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.6825, -50.825)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.544, -7.6221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1796, -0.3548, -0.3548, 0.1796, -2.0972, -11.4057)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.238, -0.3177, -0.3177, 0.238, 5.4313, -15.3963)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 5.2398, -9.3572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0027, 0.0, -0.0184, 1.0011, -47.6942, -46.4333)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 34 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 33}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 0.4089, -27.2741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 18.9647, -11.4423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0976, 0.3839, 0.3839, -0.0976, 0.3724, -25.4605)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3876, 0.0878, 0.0711, 0.3915, 13.6826, -17.6473)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3876, 0.0878, 0.0878, 0.3877, 12.7271, -26.4626)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.9325, -50.975)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -14.194, -7.5721)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1918, -0.3483, -0.3483, 0.1918, -1.2999, -12.0865)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2297, -0.3238, -0.3238, 0.2297, 5.6338, -15.448)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 5.5898, -9.3072)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0054, 0.0, -0.0402, 1.0018, -46.6902, -46.4522)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 35 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 34}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 1.1589, -27.9741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 19.7147, -12.1423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1243, 0.3759, 0.3759, -0.1243, 0.3053, -25.085)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3898, 0.0777, 0.0609, 0.3932, 13.9655, -17.3556)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3898, 0.0777, 0.0777, 0.3898, 13.2084, -26.378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 19.2325, -51.075)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -13.844, -7.4721)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2038, -0.3413, -0.3413, 0.2038, -0.5138, -12.7732)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2212, -0.3296, -0.3296, 0.2212, 5.879, -15.4498)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 5.9398, -9.2072)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0081, 0.0, -0.062, 1.002, -45.6856, -46.5081)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 36 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 35}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 1.8589, -28.6241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 20.4147, -12.7923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1517, 0.3655, 0.3655, -0.1517, 0.3612, -24.6001)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3917, 0.0675, 0.0506, 0.3946, 14.1903, -17.2579)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3917, 0.0675, 0.0675, 0.3917, 13.683, -26.0859)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 19.5325, -51.225)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -13.494, -7.3721)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2156, -0.3339, -0.3339, 0.2156, 0.1613, -13.5156)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2125, -0.3353, -0.3353, 0.2125, 6.0157, -15.4518)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 6.2898, -9.1072)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0108, 0.0, -0.0838, 1.0017, -44.7299, -46.4495)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 37 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 36}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 2.6089, -29.3741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 21.1647, -13.5423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1784, 0.3531, 0.3531, -0.1784, 0.3638, -24.0862)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 3.1603, -33.2865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3933, 0.0572, 0.0402, 0.3958, 14.4582, -17.0053)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3933, 0.0572, 0.0572, 0.3933, 14.1489, -25.9343)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 19.8325, -51.325)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3069, -0.2492, -0.2492, 0.3069, -13.144, -7.3221)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2272, -0.326, -0.326, 0.2272, 0.8246, -14.164)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2036, -0.3407, -0.3407, 0.2036, 6.2445, -15.5049)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2591, -0.2999, -0.2999, 0.2591, 6.6398, -9.0572)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0135, 0.0, -0.1056, 1.0009, -43.7237, -46.4266)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 38 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 37}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, 3.2875, -30.0813)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 21.867, -14.2744)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.2045, 0.3392, 0.3392, -0.2045, 0.4008, -23.5478)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 3.1252, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3948, 0.0473, 0.0309, 0.3967, 14.7097, -16.8095)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3948, 0.0473, 0.0473, 0.3948, 14.6018, -25.7925)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 20.191, -51.4185)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3076, -0.2492, -0.2492, 0.3076, -12.7826, -7.2244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2399, -0.3175, -0.3175, 0.2399, 1.6002, -14.8941)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.1956, -0.346, -0.346, 0.1956, 6.4375, -15.5284)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2592, -0.3007, -0.3007, 0.2592, 6.9691, -8.8232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0162, 0.0, -0.128, 1.0, -42.7008, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 39 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 38}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, 0.8589, -28.6741)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 19.4647, -12.8923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.155, 0.3642, 0.3642, -0.155, -0.7334, -24.4713)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 2.5103, -33.2365)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.392, 0.0659, 0.0502, 0.3947, 14.2028, -17.2086)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3897, 0.0776, 0.0776, 0.3898, 12.8585, -26.2236)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 18.2825, -50.725)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3436, -0.1952, -0.1952, 0.3436, -13.1812, -6.4368)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2425, -0.3147, -0.3147, 0.2425, 0.2091, -13.5446)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2378, -0.3176, -0.3176, 0.2378, 5.8256, -16.0947)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.304, -0.2539, -0.2539, 0.304, 5.9187, -11.1675)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0108, 0.0, -0.0618, 0.9946, -45.9273, -45.9398)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 40 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 39}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -1.5911, -27.2241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 17.0147, -11.4423)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1011, 0.383, 0.383, -0.1011, -1.6327, -25.3384)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 1.8103, -33.1865)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.388, 0.0862, 0.0695, 0.3917, 13.7621, -17.5511)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3823, 0.1081, 0.1081, 0.3823, 11.073, -26.6661)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 16.3825, -49.875)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3712, -0.1353, -0.1353, 0.3712, -13.7302, -5.6491)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2466, -0.3115, -0.3115, 0.2466, -1.2585, -12.1739)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2775, -0.2836, -0.2836, 0.2775, 4.9915, -16.6737)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.3426, -0.1986, -0.1987, 0.3426, 4.3541, -13.4179)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0054, 0.0, -6.0E-4, 0.9852, -48.9571, -45.4147)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 41 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 40}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, -4.1125, -25.7313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 14.467, -9.9244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3942, 0.3942, -0.0432, -2.4853, -26.113)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 1.0252, -33.158)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3832, 0.1069, 0.091, 0.3876, 13.219, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3722, 0.1401, 0.1401, 0.3722, 9.0063, -27.1579)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 14.441, -48.9185)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3894, -0.0685, -0.0685, 0.3894, -14.5006, -4.8239)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2508, -0.3089, -0.3089, 0.2508, -2.7126, -10.8475)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.3142, -0.2432, -0.2432, 0.3143, 3.9161, -17.2751)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.372, -0.1368, -0.1368, 0.372, 2.0235, -15.7885)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0585, 0.972, -52.0254, -44.7249)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 42 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 41}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2315, 0.3206, 0.3199, -0.2332, -2.5411, -25.8241)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1536, -0.3657, 0.3646, -0.1551, 15.9147, -9.9923)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3941, 0.3941, -0.0432, -0.9326, -26.2107)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2464, 0.3113, 0.3113, 0.2464, 2.0603, -33.1365)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3297, -0.2209, 0.2209, 0.3297, 15.8873, -6.6529)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3053, 0.2503, 0.1566, 0.191, 26.0815, -20.3366)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3808, 0.3808, -0.1039, 3.3845, -15.3437)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2778, 0.2838, 0.2838, 0.2778, 4.6095, -18.9635)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3672, 0.1451, 0.073, 0.1846, 3.8052, -13.1184)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3829, 0.1065, 0.0899, 0.3876, 13.2743, -17.9782)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3778, 0.1231, 0.1231, 0.3778, 10.4048, -26.9356)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0281, -0.0281, 0.3342, 16.3325, -49.875)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3601, -0.1627, -0.1627, 0.3601, -14.5268, -6.1919)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.2111, -0.3368, -0.3368, 0.2111, -2.6854, -10.7838)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2823, -0.2789, -0.2789, 0.2823, 4.6946, -16.3225)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.326, -0.2248, -0.2249, 0.326, 4.0797, -12.5727)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.2905, 0.2696, 0.2696, 0.2905, 7.9875, -9.2831)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2728, 0.2863, 0.2863, 0.2728, 0.4218, -17.0089)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0268, 0.9865, -50.2404, -45.5503)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      {/* FRAME 43 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${TrappedMaleBrute_X_OFFSET + (TrappedMaleBrute_WIDTH + TrappedMaleBrute_MARGIN) * 42}, ${TrappedMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2319, 0.3211, 0.3204, -0.2336, -1.0625, -25.9313)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1539, -0.3661, 0.365, -0.1554, 17.517, -10.1244)" width="253.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0432, 0.3942, 0.3942, -0.0432, 0.5647, -26.313)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2471, 0.3115, 0.3115, 0.2471, 3.1252, -33.308)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3301, -0.2213, 0.2213, 0.3301, 15.8762, -6.704)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3058, 0.2506, 0.1568, 0.1914, 26.0473, -20.348)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.1039, 0.3811, 0.3811, -0.1039, 3.3835, -15.3)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite31`} />
        <use height="34.25" transform="matrix(-0.2784, 0.2842, 0.2842, 0.2784, 4.6173, -18.9816)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite37`} />
        <use height="45.0" transform="matrix(-0.3674, 0.1456, 0.0732, 0.1848, 3.7574, -13.126)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite42`} />
        <use height="44.05" transform="matrix(-0.3832, 0.1069, 0.091, 0.3876, 13.219, -17.9424)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite47`} />
        <use height="44.2" transform="matrix(-0.3832, 0.1069, 0.1069, 0.3832, 11.7778, -26.8378)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite53`} />
        <use height="115.65" transform="matrix(-0.3342, -0.0291, -0.0291, 0.3342, 18.441, -50.6685)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite60`} />
        <use height="26.45" transform="matrix(-0.3076, -0.2492, -0.2492, 0.3076, -14.8826, -7.7244)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite73`} />
        <use height="30.75" transform="matrix(-0.1686, -0.3608, -0.3608, 0.1686, -2.728, -10.7564)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite77`} />
        <use height="48.0" transform="matrix(-0.2461, -0.3123, -0.3123, 0.2461, 5.2373, -15.4259)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite81`} />
        <use height="80.8" transform="matrix(-0.2592, -0.3007, -0.3007, 0.2592, 4.8691, -9.3232)" width="85.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite85`} />
        <use height="40.55" transform="matrix(-0.291, 0.27, 0.27, 0.291, 7.9403, -9.3503)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite90`} />
        <use height="51.8" transform="matrix(-0.2734, 0.2867, 0.2867, 0.2734, 0.4305, -17.0192)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite96`} />
        <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.6, -46.4)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite100`} />
      </g>
      <defs>
        <g id={`TrappedMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#TrappedMaleBrute-${id}-shape0`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`TrappedMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-shape1`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite6`} />
          <clipPath id={`TrappedMaleBrute-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#TrappedMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#TrappedMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#TrappedMaleBrute-${id}-shape2`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#TrappedMaleBrute-${id}-shape4`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`TrappedMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#TrappedMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#TrappedMaleBrute-${id}-shape5`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`TrappedMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`TrappedMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#TrappedMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#TrappedMaleBrute-${id}-shape6`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`TrappedMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`TrappedMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#TrappedMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#TrappedMaleBrute-${id}-shape7`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`TrappedMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`TrappedMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`TrappedMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#TrappedMaleBrute-${id}-shape7`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#TrappedMaleBrute-${id}-shape8`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`TrappedMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite39`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite39`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`TrappedMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite40`} />
          <use height="29.55" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-shape9`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite42`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite43`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`TrappedMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#TrappedMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`TrappedMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite45`} />
          <use height="45.0" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#TrappedMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#TrappedMaleBrute-${id}-shape10`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#TrappedMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite50`} />
          <use height="44.25" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#TrappedMaleBrute-${id}-shape11`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite51`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`TrappedMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite52`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite55`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`TrappedMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite56`} />
          <use height="35.0" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite57`} />
          <use height="41.1" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite58`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#TrappedMaleBrute-${id}-shape12`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`TrappedMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#TrappedMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#TrappedMaleBrute-${id}-shape13`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`TrappedMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`TrappedMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite62`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#TrappedMaleBrute-${id}-sprite63`} />
          <use height="12.9" id={`TrappedMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite68`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#TrappedMaleBrute-${id}-shape18`} />
          <use height="86.9" id={`TrappedMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#TrappedMaleBrute-${id}-sprite69`} />
          <use height="42.75" id={`TrappedMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#TrappedMaleBrute-${id}-sprite70`} />
          <use height="19.35" id={`TrappedMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#TrappedMaleBrute-${id}-sprite72`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite62`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#TrappedMaleBrute-${id}-shape14`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`TrappedMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite64`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#TrappedMaleBrute-${id}-sprite65`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#TrappedMaleBrute-${id}-sprite66`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite66`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#TrappedMaleBrute-${id}-shape15`} />
          <use height="2.9" id={`TrappedMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite67`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#TrappedMaleBrute-${id}-shape16`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#TrappedMaleBrute-${id}-shape17`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#TrappedMaleBrute-${id}-shape19`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`TrappedMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#TrappedMaleBrute-${id}-shape20`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#TrappedMaleBrute-${id}-shape21`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#TrappedMaleBrute-${id}-sprite75`} />
          <use height="26.45" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#TrappedMaleBrute-${id}-shape22`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite78`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite79`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#TrappedMaleBrute-${id}-sprite80`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#TrappedMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite83`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#TrappedMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`TrappedMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#TrappedMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite86`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite86`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`TrappedMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite87`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#TrappedMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#TrappedMaleBrute-${id}-sprite88`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`TrappedMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#TrappedMaleBrute-${id}-shape23`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <path d="M53.3 19.5 L53.15 19.35 52.8 18.85 52.6 18.25 Q52.6 17.65 53.2 17.15 53.7 16.7 54.1 16.7 54.55 16.7 55.0 17.15 55.5 17.65 55.5 18.3 L54.95 19.35 Q54.4 19.9 54.05 19.9 53.7 19.9 53.3 19.5 M42.8 27.5 Q41.75 28.65 41.05 28.65 L40.05 27.95 Q39.05 27.2 38.75 27.2 37.75 27.2 36.8 25.85 35.85 24.5 35.85 23.1 35.85 22.6 36.2 22.2 36.55 21.75 37.05 21.75 38.5 21.75 40.6 22.45 43.85 23.5 43.85 25.5 43.85 26.3 42.8 27.5 M47.6 47.1 Q47.6 45.8 48.65 45.8 49.65 45.8 49.7 46.95 49.7 48.05 48.8 48.05 L48.3 48.0 Q47.6 47.8 47.6 47.1 M27.85 10.55 Q27.85 9.45 28.8 9.45 29.6 9.45 29.6 10.5 29.6 11.55 28.65 11.55 L27.95 11.4 27.85 10.55 M37.6 34.25 L39.15 34.0 Q40.95 34.0 40.3 35.6 39.7 37.15 38.45 37.15 L37.6 36.85 Q36.95 36.4 36.95 35.5 36.95 34.6 37.6 34.25" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M13.65 63.5 Q11.35 62.3 9.35 60.6 7.2 58.8 5.4 56.35 -1.8 46.6 0.6 32.9 3.0 19.3 13.65 9.65 23.05 1.05 34.0 0.15 L36.85 0.0 Q40.3 0.0 43.35 0.75 L44.15 0.95 Q46.8 1.7 49.1 3.0 53.4 5.4 56.65 9.75 L58.6 12.75 Q63.5 21.55 61.45 33.05 59.05 46.85 48.4 56.5 L44.75 59.5 Q36.1 65.8 26.2 66.1 L26.1 66.1 25.2 66.1 Q18.7 66.1 13.65 63.5 M46.5 29.6 Q46.45 24.95 43.85 21.4 L42.45 19.75 Q39.05 16.5 33.95 16.5 L31.2 16.75 Q28.5 17.2 26.05 18.6 24.15 19.7 22.35 21.3 17.05 26.15 15.85 32.95 15.5 34.85 15.55 36.65 15.6 39.05 16.45 41.2 17.1 43.05 18.3 44.65 21.9 49.55 28.15 49.5 L31.45 49.2 31.85 49.1 Q36.05 48.05 39.7 44.7 45.05 39.85 46.2 33.05 L46.5 29.6 M30.85 27.0 L33.35 27.2 34.7 27.65 36.25 30.95 Q36.9 35.35 32.3 37.4 L31.05 37.95 Q26.85 38.65 26.1 34.25 L25.95 33.3 Q26.35 29.25 30.0 27.35 L30.85 27.0 M26.2 66.1 Q28.1 58.95 31.45 49.2 28.1 58.95 26.2 66.1 M49.0 20.2 Q49.2 21.9 50.0 22.45 L53.3 22.2 Q55.9 21.4 56.5 20.55 57.05 19.75 56.4 17.7 55.8 15.75 55.1 15.25 L52.8 15.15 Q50.75 15.55 49.5 17.35 48.75 18.4 49.0 20.2 M42.45 19.75 L49.1 3.0 42.45 19.75 M49.95 45.5 Q47.95 43.65 45.05 45.0 39.55 47.7 43.7 52.1 L45.2 51.7 Q47.1 51.1 48.5 49.9 49.8 48.75 50.7 47.15 L50.7 46.35 49.95 45.5 52.05 38.45 Q57.0 21.7 58.6 12.75 57.0 21.7 52.05 38.45 L49.95 45.5 M34.0 0.15 Q32.7 1.95 31.95 3.65 31.25 5.2 31.25 5.75 L30.6 7.85 31.25 5.75 Q31.25 5.2 31.95 3.65 32.7 1.95 34.0 0.15 M44.75 59.5 Q46.3 56.55 48.5 49.9 46.3 56.55 44.75 59.5 M28.1 13.9 L28.2 13.85 Q29.55 13.3 30.5 12.2 L31.0 11.15 Q31.9 8.7 30.9 8.05 L30.6 7.85 27.5 7.65 Q24.45 8.05 22.95 10.15 22.6 10.7 23.0 11.75 23.4 12.95 24.45 13.65 26.0 14.8 28.1 13.9 L26.05 18.6 28.1 13.9 M11.2 29.0 L10.9 28.55 Q6.9 28.25 4.2 31.4 3.6 34.55 6.3 36.0 L6.7 36.0 Q12.15 34.35 11.2 29.0 M14.9 55.9 Q14.05 59.1 17.0 59.1 22.95 59.1 21.05 53.4 16.4 50.4 14.9 55.9 M16.45 41.2 Q12.3 51.95 9.35 60.6 12.3 51.95 16.45 41.2" fill="#a77250" fillRule="evenodd" stroke="none" />
          <path d="M13.65 63.5 Q8.4 62.2 4.35 58.75 2.2 56.95 0.4 54.5 -6.8 44.75 -4.4 31.05 -2.0 17.45 8.65 7.8 18.05 -0.8 29.0 -1.7 L31.85 -1.85 Q38.3 -1.85 43.35 0.75 40.3 0.0 36.85 0.0 L34.0 0.15 Q23.05 1.05 13.65 9.65 3.0 19.3 0.6 32.9 -1.8 46.6 5.4 56.35 7.2 58.8 9.35 60.6 11.35 62.3 13.65 63.5 M53.3 19.5 L52.4 20.5 51.1 21.4 48.95 19.55 Q48.95 19.05 50.05 17.6 51.15 16.15 51.65 16.15 53.05 16.15 52.55 17.0 L51.5 18.45 Q52.4 18.45 52.6 19.0 L52.65 18.85 52.8 18.85 53.15 19.35 53.3 19.5 M42.8 49.1 Q42.8 48.25 43.75 47.4 44.6 46.6 45.25 46.6 45.9 46.6 45.95 47.0 L45.9 47.5 46.15 48.2 46.4 48.85 Q46.4 49.5 45.4 49.95 L43.9 50.3 Q42.8 50.05 42.8 49.1 M24.45 11.15 Q22.85 10.1 24.25 9.1 25.55 8.2 26.35 8.2 28.2 8.2 27.0 10.6 L25.35 12.95 24.45 11.15 M24.75 21.2 Q25.25 21.2 25.1 21.4 L25.05 21.4 Q25.1 22.1 24.3 23.05 L24.85 23.7 Q24.85 24.65 23.55 26.15 23.55 27.0 23.2 27.5 L22.85 28.2 Q22.85 28.7 23.0 28.5 L23.05 28.45 23.6 27.4 Q23.95 26.8 24.3 26.8 24.6 26.8 24.7 27.05 L25.1 27.9 26.15 27.2 27.0 26.65 27.15 26.85 Q24.9 32.4 24.65 32.4 L24.05 32.3 23.65 31.15 23.3 30.75 22.9 31.05 22.35 31.2 Q21.65 31.2 21.35 30.3 L21.35 30.4 20.0 32.55 Q18.75 34.4 18.35 34.4 L17.85 34.05 17.65 33.35 Q17.65 33.05 17.8 32.85 L17.9 32.5 Q16.95 32.2 16.95 31.45 16.95 30.25 20.5 25.7 24.0 21.2 24.75 21.2 M19.0 42.3 L19.2 41.5 Q19.45 41.0 19.85 41.0 20.35 41.0 21.25 41.5 21.05 40.05 21.9 39.7 L23.4 39.25 24.45 37.65 Q25.15 36.3 25.35 36.3 26.35 36.3 26.3 37.75 26.25 39.2 25.5 39.2 L25.15 39.15 25.0 38.9 24.9 39.1 Q25.2 39.4 25.0 40.2 24.8 41.0 24.35 41.0 24.1 41.0 23.5 41.35 22.75 41.8 22.75 42.3 L22.85 43.55 21.5 43.95 22.4 45.5 Q22.4 46.3 21.65 46.3 21.2 46.3 20.3 45.4 19.0 44.15 19.0 42.3 M7.35 29.3 Q8.75 29.3 8.1 30.15 L6.85 31.6 6.9 31.65 7.55 31.7 Q8.15 31.8 8.15 32.45 L7.9 34.0 Q7.5 34.65 6.5 34.65 L5.65 34.5 5.55 33.8 Q5.55 33.25 5.15 32.65 L4.75 31.6 Q4.75 30.95 5.8 30.1 6.8 29.3 7.35 29.3 M18.2 54.5 L17.9 55.5 17.95 55.75 Q19.1 55.85 19.1 56.6 L18.25 57.55 Q17.4 58.15 16.9 58.15 16.4 58.15 15.95 57.5 15.5 56.9 15.5 56.4 15.5 55.45 16.05 54.5 16.6 53.5 17.3 53.5 18.25 53.5 18.2 54.5" fill="#674732" fillRule="evenodd" stroke="none" />
          <path d="M52.8 18.85 L52.65 18.85 52.6 19.0 Q52.4 18.45 51.5 18.45 L52.55 17.0 Q53.05 16.15 51.65 16.15 51.15 16.15 50.05 17.6 48.95 19.05 48.95 19.55 L51.1 21.4 52.4 20.5 53.3 19.5 Q53.7 19.9 54.05 19.9 54.4 19.9 54.95 19.35 L55.5 18.3 Q55.5 17.65 55.0 17.15 54.55 16.7 54.1 16.7 53.7 16.7 53.2 17.15 52.6 17.65 52.6 18.25 L52.8 18.85 M31.2 16.75 L33.95 16.5 Q39.05 16.5 42.45 19.75 L43.85 21.4 Q46.45 24.95 46.5 29.6 L36.25 30.95 46.5 29.6 46.2 33.05 Q45.05 39.85 39.7 44.7 36.05 48.05 31.85 49.1 L31.45 49.2 28.15 49.5 Q21.9 49.55 18.3 44.65 17.1 43.05 16.45 41.2 15.6 39.05 15.55 36.65 15.5 34.85 15.85 32.95 17.05 26.15 22.35 21.3 24.15 19.7 26.05 18.6 28.5 17.2 31.2 16.75 L30.85 27.0 31.2 16.75 M36.25 30.95 L34.7 27.65 33.35 27.2 30.85 27.0 30.0 27.35 Q26.35 29.25 25.95 33.3 L15.55 36.65 25.95 33.3 26.1 34.25 Q26.85 38.65 31.05 37.95 L32.3 37.4 Q36.9 35.35 36.25 30.95 M49.0 20.2 Q48.75 18.4 49.5 17.35 50.75 15.55 52.8 15.15 L55.1 15.25 Q55.8 15.75 56.4 17.7 57.05 19.75 56.5 20.55 55.9 21.4 53.3 22.2 L50.0 22.45 Q49.2 21.9 49.0 20.2 M42.8 27.5 Q43.85 26.3 43.85 25.5 43.85 23.5 40.6 22.45 38.5 21.75 37.05 21.75 36.55 21.75 36.2 22.2 35.85 22.6 35.85 23.1 35.85 24.5 36.8 25.85 37.75 27.2 38.75 27.2 39.05 27.2 40.05 27.95 L41.05 28.65 Q41.75 28.65 42.8 27.5 M42.8 49.1 Q42.8 50.05 43.9 50.3 L45.4 49.95 Q46.4 49.5 46.4 48.85 L46.15 48.2 45.9 47.5 45.95 47.0 Q45.9 46.6 45.25 46.6 44.6 46.6 43.75 47.4 42.8 48.25 42.8 49.1 M47.6 47.1 Q47.6 47.8 48.3 48.0 L48.8 48.05 Q49.7 48.05 49.7 46.95 49.65 45.8 48.65 45.8 47.6 45.8 47.6 47.1 M48.5 49.9 Q47.1 51.1 45.2 51.7 L43.7 52.1 Q39.55 47.7 45.05 45.0 47.95 43.65 49.95 45.5 L50.7 46.35 50.7 47.15 Q49.8 48.75 48.5 49.9 M30.6 7.85 L30.9 8.05 Q31.9 8.7 31.0 11.15 L30.5 12.2 Q29.55 13.3 28.2 13.85 L28.1 13.9 Q26.0 14.8 24.45 13.65 23.4 12.95 23.0 11.75 22.6 10.7 22.95 10.15 24.45 8.05 27.5 7.65 L30.6 7.85 M24.45 11.15 L25.35 12.95 27.0 10.6 Q28.2 8.2 26.35 8.2 25.55 8.2 24.25 9.1 22.85 10.1 24.45 11.15 M27.85 10.55 L27.95 11.4 28.65 11.55 Q29.6 11.55 29.6 10.5 29.6 9.45 28.8 9.45 27.85 9.45 27.85 10.55 M24.75 21.2 Q24.0 21.2 20.5 25.7 16.95 30.25 16.95 31.45 16.95 32.2 17.9 32.5 L17.8 32.85 Q17.65 33.05 17.65 33.35 L17.85 34.05 18.35 34.4 Q18.75 34.4 20.0 32.55 L21.35 30.4 21.35 30.3 Q21.65 31.2 22.35 31.2 L22.9 31.05 23.3 30.75 23.65 31.15 24.05 32.3 24.65 32.4 Q24.9 32.4 27.15 26.85 L27.0 26.65 26.15 27.2 25.1 27.9 24.7 27.05 Q24.6 26.8 24.3 26.8 23.95 26.8 23.6 27.4 L23.05 28.45 23.0 28.5 Q22.85 28.7 22.85 28.2 L23.2 27.5 Q23.55 27.0 23.55 26.15 24.85 24.65 24.85 23.7 L24.3 23.05 Q25.1 22.1 25.05 21.4 L25.1 21.4 Q25.25 21.2 24.75 21.2 M11.2 29.0 Q12.15 34.35 6.7 36.0 L6.3 36.0 Q3.6 34.55 4.2 31.4 6.9 28.25 10.9 28.55 L11.2 29.0 M7.35 29.3 Q6.8 29.3 5.8 30.1 4.75 30.95 4.75 31.6 L5.15 32.65 Q5.55 33.25 5.55 33.8 L5.65 34.5 6.5 34.65 Q7.5 34.65 7.9 34.0 L8.15 32.45 Q8.15 31.8 7.55 31.7 L6.9 31.65 6.85 31.6 8.1 30.15 Q8.75 29.3 7.35 29.3 M19.0 42.3 Q19.0 44.15 20.3 45.4 21.2 46.3 21.65 46.3 22.4 46.3 22.4 45.5 L21.5 43.95 22.85 43.55 22.75 42.3 Q22.75 41.8 23.5 41.35 24.1 41.0 24.35 41.0 24.8 41.0 25.0 40.2 25.2 39.4 24.9 39.1 L25.0 38.9 25.15 39.15 25.5 39.2 Q26.25 39.2 26.3 37.75 26.35 36.3 25.35 36.3 25.15 36.3 24.45 37.65 L23.4 39.25 21.9 39.7 Q21.05 40.05 21.25 41.5 20.35 41.0 19.85 41.0 19.45 41.0 19.2 41.5 L19.0 42.3 M37.6 34.25 Q36.95 34.6 36.95 35.5 36.95 36.4 37.6 36.85 L38.45 37.15 Q39.7 37.15 40.3 35.6 40.95 34.0 39.15 34.0 L37.6 34.25 M31.85 49.1 L31.05 37.95 31.85 49.1 M18.2 54.5 Q18.25 53.5 17.3 53.5 16.6 53.5 16.05 54.5 15.5 55.45 15.5 56.4 15.5 56.9 15.95 57.5 16.4 58.15 16.9 58.15 17.4 58.15 18.25 57.55 L19.1 56.6 Q19.1 55.85 17.95 55.75 L17.9 55.5 18.2 54.5 M14.9 55.9 Q16.4 50.4 21.05 53.4 22.95 59.1 17.0 59.1 14.05 59.1 14.9 55.9" fill="#f7c500" fillRule="evenodd" stroke="none" />
          <path d="M43.35 0.75 Q38.3 -1.85 31.85 -1.85 L29.0 -1.7 Q18.05 -0.8 8.65 7.8 -2.0 17.45 -4.4 31.05 -6.8 44.75 0.4 54.5 2.2 56.95 4.35 58.75 8.4 62.2 13.65 63.5 11.35 62.3 9.35 60.6 7.2 58.8 5.4 56.35 -1.8 46.6 0.6 32.9 3.0 19.3 13.65 9.65 23.05 1.05 34.0 0.15 L36.85 0.0 Q40.3 0.0 43.35 0.75 L44.15 0.95 Q46.8 1.7 49.1 3.0 53.4 5.4 56.65 9.75 L58.6 12.75 Q63.5 21.55 61.45 33.05 59.05 46.85 48.4 56.5 L44.75 59.5 Q36.1 65.8 26.2 66.1 M26.1 66.1 L25.2 66.1 Q18.7 66.1 13.65 63.5 M46.5 29.6 Q46.45 24.95 43.85 21.4 L42.45 19.75 Q39.05 16.5 33.95 16.5 L31.2 16.75 30.85 27.0 33.35 27.2 34.7 27.65 36.25 30.95 46.5 29.6 46.2 33.05 Q45.05 39.85 39.7 44.7 36.05 48.05 31.85 49.1 L31.45 49.2 28.15 49.5 Q21.9 49.55 18.3 44.65 17.1 43.05 16.45 41.2 15.6 39.05 15.55 36.65 L25.95 33.3 Q26.35 29.25 30.0 27.35 L30.85 27.0 M49.0 20.2 Q48.75 18.4 49.5 17.35 50.75 15.55 52.8 15.15 L55.1 15.25 Q55.8 15.75 56.4 17.7 57.05 19.75 56.5 20.55 55.9 21.4 53.3 22.2 L50.0 22.45 Q49.2 21.9 49.0 20.2 M48.5 49.9 Q47.1 51.1 45.2 51.7 L43.7 52.1 Q39.55 47.7 45.05 45.0 47.95 43.65 49.95 45.5 L50.7 46.35 50.7 47.15 Q49.8 48.75 48.5 49.9 M30.6 7.85 L30.9 8.05 Q31.9 8.7 31.0 11.15 L30.5 12.2 Q29.55 13.3 28.2 13.85 L28.1 13.9 Q26.0 14.8 24.45 13.65 23.4 12.95 23.0 11.75 22.6 10.7 22.95 10.15 24.45 8.05 27.5 7.65 L30.6 7.85 M26.05 18.6 Q28.5 17.2 31.2 16.75 M26.05 18.6 Q24.15 19.7 22.35 21.3 17.05 26.15 15.85 32.95 15.5 34.85 15.55 36.65 M11.2 29.0 Q12.15 34.35 6.7 36.0 L6.3 36.0 Q3.6 34.55 4.2 31.4 6.9 28.25 10.9 28.55 L11.2 29.0 M31.05 37.95 Q26.85 38.65 26.1 34.25 L25.95 33.3 M36.25 30.95 Q36.9 35.35 32.3 37.4 L31.05 37.95 31.85 49.1 M14.9 55.9 Q16.4 50.4 21.05 53.4 22.95 59.1 17.0 59.1 14.05 59.1 14.9 55.9" fill="none" stroke="#3b0101" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M31.45 49.2 Q28.1 58.95 26.2 66.1 M49.1 3.0 L42.45 19.75 M49.95 45.5 L52.05 38.45 Q57.0 21.7 58.6 12.75 M48.5 49.9 Q46.3 56.55 44.75 59.5 M30.6 7.85 L31.25 5.75 Q31.25 5.2 31.95 3.65 32.7 1.95 34.0 0.15 M28.1 13.9 L26.05 18.6 M9.35 60.6 Q12.3 51.95 16.45 41.2" fill="none" stroke="#3b0101" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite90`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#TrappedMaleBrute-${id}-sprite91`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`TrappedMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#TrappedMaleBrute-${id}-sprite92`} />
          <use height="33.4" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#TrappedMaleBrute-${id}-sprite93`} />
          <use height="38.65" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#TrappedMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#TrappedMaleBrute-${id}-shape24`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`TrappedMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#TrappedMaleBrute-${id}-sprite95`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`TrappedMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#TrappedMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`TrappedMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#TrappedMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`TrappedMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#TrappedMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`TrappedMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#TrappedMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`TrappedMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#TrappedMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-sprite100`} transform="matrix(1.0, 0.0, 0.0, 1.0, 50.9, 29.5)">
          <use height="59.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -50.9, -29.5)" width="101.75" xlinkHref={`#TrappedMaleBrute-${id}-shape25`} />
        </g>
        <g id={`TrappedMaleBrute-${id}-shape25`} transform="matrix(1.0, 0.0, 0.0, 1.0, 50.9, 29.5)">
          <path d="M16.9 -11.85 L16.5 -10.45 Q15.75 -9.1 13.95 -9.1 L13.55 -9.1 Q15.65 -4.8 17.15 -2.65 L19.2 0.7 20.45 0.9 Q21.9 0.9 23.0 -1.05 L23.55 -2.25 22.55 -4.4 20.7 -7.6 Q19.6 -9.5 18.4 -10.5 L16.9 -11.85 M16.0 -12.75 L15.35 -13.5 13.1 -16.35 11.45 -17.6 Q9.85 -18.75 9.5 -19.3 L9.25 -19.8 8.5 -19.8 10.85 -15.0 13.2 -9.9 13.3 -9.9 Q15.5 -9.9 16.0 -11.25 16.2 -11.8 16.0 -12.75 M18.45 3.15 L15.2 -2.5 11.9 -8.7 11.9 -8.75 11.5 -8.4 Q10.7 -7.75 10.05 -7.75 L5.45 -7.8 7.05 -0.7 7.95 3.3 8.75 4.25 Q10.35 5.85 13.45 5.85 16.9 5.85 18.0 4.2 L18.45 3.15 M23.4 -0.05 Q21.85 1.85 19.85 1.95 L20.5 3.3 22.9 8.05 23.05 8.0 24.6 9.7 Q26.4 11.35 27.8 11.35 30.65 11.35 30.9 9.1 L31.0 8.7 29.75 7.25 Q26.45 3.2 24.15 -1.1 L23.4 -0.05 M16.9 14.55 Q13.45 14.55 11.3 13.4 L10.85 13.15 Q13.6 19.9 18.9 25.35 L19.8 25.55 21.45 25.85 28.65 25.0 31.8 24.0 33.35 23.2 34.6 22.35 35.05 21.7 34.95 21.45 32.3 19.8 Q29.2 17.7 27.45 15.9 L24.95 12.65 23.65 10.6 23.45 10.45 21.9 12.7 Q20.4 14.55 16.9 14.55 M22.25 8.9 L22.25 8.75 18.85 3.8 18.4 4.7 Q17.15 6.9 14.65 6.9 11.05 6.9 8.75 5.45 L8.45 5.25 Q9.45 9.3 10.3 11.65 13.15 13.45 15.45 13.45 22.25 13.45 22.25 8.9 M27.95 12.5 Q27.15 12.5 25.35 11.55 L24.95 11.35 Q29.0 17.05 36.15 21.25 L37.8 21.45 45.45 20.9 Q46.55 20.55 47.05 20.0 L48.7 18.55 Q49.0 18.25 49.25 18.25 39.7 17.8 31.95 9.7 31.2 12.5 27.95 12.5 M27.6 0.55 Q29.6 4.3 32.05 6.7 L38.45 12.85 Q43.45 16.5 50.85 17.75 50.75 18.25 50.25 18.25 L49.4 18.25 49.55 18.75 Q49.55 19.8 47.65 20.85 44.75 22.45 38.8 22.45 L35.95 22.15 Q35.7 23.8 31.35 25.3 27.05 26.75 23.2 26.75 L19.25 26.3 19.05 26.2 18.8 26.2 17.8 25.9 15.95 27.15 13.45 28.4 Q10.15 29.5 5.35 29.5 L-7.85 28.35 Q-15.5 27.0 -18.2 24.6 L-19.45 25.05 -21.15 25.3 Q-27.9 25.3 -31.5 22.85 -34.15 21.1 -34.7 18.45 L-36.0 18.7 -37.5 18.9 Q-41.25 18.9 -44.7 16.55 -47.55 14.6 -47.55 13.6 L-47.45 13.35 -50.45 14.35 -50.9 14.3 Q-42.55 10.95 -36.0 3.65 -32.5 -0.2 -27.15 -8.65 L-22.7 -14.7 -17.9 -20.9 Q-14.95 -25.0 -7.25 -27.7 -0.35 -30.15 1.85 -29.25 5.3 -28.1 7.4 -26.55 9.4 -25.1 9.7 -23.6 10.1 -21.7 10.95 -20.45 L12.65 -19.1 14.5 -17.65 24.0 -5.6 27.6 0.55 M-32.05 1.4 L-34.9 4.75 Q-40.35 10.5 -47.15 13.25 -46.45 14.6 -43.9 16.1 -40.85 17.95 -38.1 17.95 L-35.65 17.6 -34.25 17.25 -34.05 17.6 Q-29.2 13.35 -25.5 9.05 L-26.95 9.4 Q-30.05 9.4 -31.35 7.95 -32.45 6.7 -32.45 4.0 -32.45 2.8 -32.05 1.4 M-31.5 4.0 Q-31.5 8.45 -26.95 8.45 -25.75 8.45 -24.45 7.75 -21.05 3.5 -18.75 -0.8 -21.3 -0.7 -22.55 -4.4 -23.15 -6.3 -23.3 -8.3 L-23.0 -11.75 -26.25 -7.0 -28.15 -4.0 -28.1 -4.05 -28.2 -3.95 -30.35 -0.9 -30.6 -0.25 Q-31.5 2.05 -31.5 4.0 M6.4 -21.55 Q4.1 -25.8 1.45 -26.45 2.75 -24.95 2.85 -21.2 L2.9 -21.25 3.4 -20.25 Q3.85 -19.55 4.8 -19.55 L5.55 -19.8 Q6.2 -20.2 6.25 -20.9 L6.7 -21.05 6.4 -21.55 M5.3 -25.55 L3.75 -26.65 Q6.05 -24.15 8.1 -20.5 L8.85 -20.75 8.25 -22.25 Q7.7 -23.6 5.3 -25.55 M-0.35 -21.7 Q0.3 -20.5 1.0 -20.5 L1.5 -20.5 0.1 -25.8 -0.45 -21.85 -0.35 -21.7 M-2.2 -21.95 L-2.2 -22.15 Q-1.9 -25.3 -0.65 -26.45 -3.95 -25.9 -6.7 -22.1 L-7.25 -21.2 Q-6.85 -20.5 -5.5 -20.5 -3.6 -20.5 -2.45 -21.7 L-2.2 -21.95 M-2.7 -14.85 Q-2.3 -16.5 -2.2 -20.7 -3.4 -19.6 -4.65 -19.6 L-7.9 -20.05 -10.5 -15.45 -11.75 -12.85 -11.8 -11.25 Q-11.95 -9.9 -11.55 -8.75 -10.7 -6.5 -7.8 -6.5 -5.65 -6.5 -4.15 -7.8 L-3.7 -8.2 -3.7 -8.25 -2.7 -14.85 M1.75 -19.5 Q0.25 -20.0 -0.6 -20.6 L-1.45 -13.05 -2.05 -7.85 Q-1.65 -7.05 -0.3 -7.05 2.75 -7.05 3.8 -8.3 L4.0 -8.5 2.9 -13.9 1.75 -19.5 M3.9 -13.95 L5.0 -9.75 5.3 -9.2 Q5.7 -8.4 8.3 -8.4 10.95 -8.4 11.65 -9.25 10.0 -12.4 9.15 -14.75 L7.25 -19.8 7.0 -19.8 6.55 -19.25 Q6.35 -18.75 5.35 -18.75 L3.0 -19.15 Q3.2 -16.8 3.9 -13.95 M-14.3 -22.55 L-15.45 -21.4 -17.4 -18.9 -18.05 -17.0 -18.0 -15.4 Q-17.6 -14.05 -15.75 -14.05 -14.35 -14.05 -13.5 -14.5 L-12.6 -14.85 -9.05 -21.0 -9.4 -20.9 -11.0 -20.5 Q-13.15 -20.5 -13.95 -21.35 -14.3 -21.75 -14.3 -22.3 L-14.3 -22.55 M-12.35 -21.25 Q-10.05 -21.25 -8.85 -22.0 L-7.8 -22.95 -7.75 -22.9 Q-6.0 -25.35 -4.3 -26.75 L-6.0 -26.25 Q-9.6 -25.1 -11.8 -24.15 L-13.7 -23.0 -13.7 -22.55 Q-13.55 -21.25 -12.35 -21.25 M-19.05 -15.9 L-19.0 -17.0 -21.55 -13.7 -21.4 -13.6 Q-21.85 -13.45 -22.25 -12.1 L-22.6 -10.4 Q-21.85 -1.65 -19.6 -1.65 L-18.75 -1.85 -18.15 -2.25 -18.0 -2.25 -16.35 -6.15 -13.25 -13.5 -13.35 -13.4 -17.0 -13.0 Q-18.4 -13.0 -18.85 -14.4 L-19.05 -15.9 M-12.65 -10.75 L-13.0 -9.9 Q-14.5 -6.15 -15.5 -4.1 -16.65 -1.7 -17.9 0.45 L-17.25 1.9 Q-15.75 4.35 -12.35 4.35 -10.8 4.35 -7.75 2.3 -6.15 1.2 -4.8 0.1 L-4.55 -1.65 -3.85 -7.1 Q-5.5 -5.7 -9.05 -5.7 -11.6 -5.7 -12.4 -9.4 L-12.65 -10.75 M-16.75 13.25 Q-13.15 13.25 -10.95 12.25 L-8.6 10.85 -8.45 11.0 -10.85 12.9 Q-12.95 14.2 -16.75 14.2 -21.5 14.2 -22.85 11.65 -23.2 11.0 -23.35 8.4 -27.8 13.7 -33.8 18.15 L-33.55 18.75 Q-32.85 20.5 -31.65 21.55 L-29.95 22.6 -28.0 23.45 -21.7 24.3 -22.0 24.3 -19.3 23.85 -18.55 23.6 Q-11.9 18.25 -8.5 11.6 L-7.8 10.15 Q-7.8 8.85 -7.2 8.75 -5.8 5.2 -5.0 1.05 L-7.8 3.1 Q-11.0 5.1 -13.35 5.1 -17.6 5.1 -18.4 1.35 -20.3 4.5 -22.35 7.1 L-22.85 7.75 -22.35 10.65 Q-21.55 13.25 -16.75 13.25 M-7.15 11.85 L-7.55 12.65 Q-11.0 19.15 -17.95 23.5 L-14.95 25.65 -10.45 26.65 -5.85 27.6 5.4 28.45 Q9.9 28.45 13.75 26.95 L17.2 25.45 Q15.75 24.25 13.85 21.15 11.65 17.6 9.7 13.35 L9.45 12.75 7.95 14.35 Q5.7 16.45 3.1 16.45 -2.25 16.45 -5.5 13.6 L-7.15 11.85 M5.85 0.3 Q5.3 -1.95 4.1 -7.95 L3.45 -7.5 Q2.15 -6.6 0.6 -6.6 -1.5 -6.6 -2.15 -7.35 -2.7 -3.25 -3.4 -0.3 L-3.7 1.1 -2.95 2.15 Q-0.75 4.55 3.5 4.55 5.7 4.55 6.6 3.4 L5.85 0.3 M-3.95 2.2 Q-5.3 7.55 -6.7 10.85 L-4.85 12.75 Q-2.1 15.25 0.5 15.25 5.55 15.25 7.85 13.3 L9.1 11.85 Q8.25 9.7 7.5 6.9 L6.75 4.05 6.05 4.6 Q5.05 5.3 4.25 5.3 -0.75 5.3 -3.1 3.15 L-3.95 2.2" fill="#cccccc" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default TrappedMaleBrute;