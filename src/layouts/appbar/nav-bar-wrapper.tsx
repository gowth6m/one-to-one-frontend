import React from 'react';

import { Box, AppBar, Toolbar } from '@mui/material';

interface Props {
  children?: React.ReactNode;
}

const NavBarWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar
        sx={{
          outline: 'none',
          boxShadow: 0,
          backgroundColor: 'background.default',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            px: 2,
          }}
        >
          {children}
        </Toolbar>
      </AppBar>

      {/* Invisible height for appbar */}
      <Box
        sx={{
          mb: 2,
          height: {
            xs: 64,
            md: 64,
          },
        }}
      />
    </>
  );
};

export default NavBarWrapper;
