import { Box, BoxProps, useTheme } from '@mui/material';
import React, { useCallback } from 'react';

export interface StyledButtonProps extends Omit<BoxProps, 'translate'> {
  image?: string;
  imageHover?: string;
  swapImage?: boolean;
  shadow?: boolean;
  contrast?: boolean;
  shift?: string;
  shadowColor?: string;
}

export const StyledButtonWidth = 207;
export const StyledButtonHeight = 58;

/**
 * StyledButton component
 */
const StyledButton = React.forwardRef<HTMLDivElement, StyledButtonProps>(({
  children,
  image = '/images/button.svg',
  imageHover = '/images/button-hover.svg',
  swapImage = true,
  shadow = true,
  contrast = true,
  shift = '4px',
  shadowColor = 'rgba(0, 0, 0, 0.2)',
  sx,
  ...rest
}: StyledButtonProps, ref) => {
  const { palette: { mode } } = useTheme();

  const themedImage = mode === 'dark' ? image.replace('/images/', '/images/dark/') : image;
  const themedImageHover = mode === 'dark' ? imageHover.replace('/images/', '/images/dark/') : imageHover;

  // Controlled hover state
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: StyledButtonWidth,
        height: StyledButtonHeight,
        pt: hover ? 0 : shift,
        pb: shift,
        cursor: 'pointer',
        backgroundImage: `url('${swapImage ? hover ? themedImageHover : themedImage : themedImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        filter: `${shadow ? `drop-shadow(4px 4px 0px ${shadowColor})` : ''} ${contrast && hover ? 'contrast(90%)' : ''}`,
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        color: 'secondary.main',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

StyledButton.displayName = 'StyledButton';

export default StyledButton;
