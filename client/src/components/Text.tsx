import React, { forwardRef } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface TextProps extends TypographyProps {
  children: React.ReactNode;
  typo?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
  body1?: boolean;
  body2?: boolean;
  caption?: boolean;
  button?: boolean;
  overline?: boolean;
  inherit?: boolean;
  bold?: boolean;
  italic?: boolean;
  smallCaps?: boolean;
  upperCase?: boolean;
  center?: boolean;
  component?: React.ElementType;
}

const Text = forwardRef<HTMLElement, TextProps>(({
  children,
  typo,
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  subtitle1 = false,
  subtitle2 = false,
  body1 = false,
  body2 = false,
  caption = false,
  button = false,
  overline = false,
  inherit = false,
  bold = false,
  italic = false,
  smallCaps = false,
  upperCase = false,
  center = false,
  sx,
  ...rest
}, ref) => (
  <Typography
    variant={
      h1 ? 'h1'
        : h2 ? 'h2'
          : h3 ? 'h3'
            : h4 ? 'h4'
              : h5 ? 'h5'
                : h6 ? 'h6'
                  : subtitle1 ? 'subtitle1'
                    : subtitle2 ? 'subtitle2'
                      : body1 ? 'body1'
                        : body2 ? 'body2'
                          : caption ? 'caption'
                            : button ? 'button'
                              : overline ? 'overline'
                                : inherit ? 'inherit'
                                  : 'body1'
    }
    fontWeight={bold ? '600' : undefined}
    sx={{
      fontVariant: smallCaps ? 'small-caps' : undefined,
      textTransform: upperCase ? 'uppercase' : undefined,
      typography: typo,
      textAlign: center ? 'center' : undefined,
      fontStyle: italic ? 'italic' : undefined,
      ...sx,
    }}
    {...rest}
    ref={ref}
  >
    {children}
  </Typography>
));

Text.displayName = 'Text';

export default Text;
