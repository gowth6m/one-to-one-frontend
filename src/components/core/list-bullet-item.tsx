import React from 'react';

import { ListItem, Typography, ListItemIcon } from '@mui/material';

import Iconify from '../iconify';

const ListBulletItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <ListItem
      disablePadding
      sx={{
        gap: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}
    >
      <ListItemIcon
        style={{
          minWidth: 'auto',
          marginRight: 8,
          marginTop: 4,
        }}
      >
        <Iconify icon={'mdi:fiber-manual-record'} width={16} height={16} />
      </ListItemIcon>
      <Typography>{children}</Typography>
    </ListItem>
  );
};

export default ListBulletItem;
