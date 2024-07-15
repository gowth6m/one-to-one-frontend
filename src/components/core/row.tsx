import React from 'react';

import { Stack, SxProps, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  children: React.ReactNode;
  onMobile?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  gap?: number;
  centerContent?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

// ----------------------------------------------------------------------

const Row: React.FC<Props> = ({
  children,
  onMobile = 'row',
  gap = 2,
  centerContent,
  fullWidth,
  sx,
  ...other
}) => {
  return (
    <Stack
      sx={{
        width: fullWidth ? '100%' : 'auto',
        flexDirection: {
          xs: onMobile,
          md: 'row',
        },
        gap: gap,
        ...(centerContent && {
          alignItems: 'center',
          justifyContent: 'center',
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
};

export default Row;
