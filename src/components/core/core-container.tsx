import React from 'react';

import { Card, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props {
  id?: string;
  children: React.ReactNode;
  gap?: number;
  padding?: number;
  fullWidth?: boolean;
  sx?: SxProps;
}

const CoreContainer: React.FC<Props> = ({
  id,
  children,
  fullWidth,
  gap = 2,
  padding = 3,
  sx,
  ...other
}) => {
  return (
    <Card
      id={id ?? 'dashboard-container'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: padding,
        gap: gap,
        width: fullWidth ? '100%' : 'auto',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Card>
  );
};

export default CoreContainer;
