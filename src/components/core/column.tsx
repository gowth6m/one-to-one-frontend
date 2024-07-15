import React from 'react';

import { Stack, SxProps, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  children: React.ReactNode;
  onMobile?: 'column' | 'row';
  gap?: number;
  centerContent?: boolean;
  sx?: SxProps;
}

// ----------------------------------------------------------------------

const Column: React.FC<Props> = ({
  children,
  onMobile = 'column',
  gap = 2,
  centerContent,
  sx,
  ...other
}) => {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: onMobile,
          md: 'column',
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

export default Column;
