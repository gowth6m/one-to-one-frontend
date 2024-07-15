import React from 'react';

import { Box, Tooltip } from '@mui/material';

import Iconify from '../iconify';

type Props = {
  message: React.ReactNode;
  children?: React.ReactNode;
};

const CoreInfoTooltip: React.FC<Props> = ({ message, children }) => {
  return (
    <Tooltip title={message}>
      <Box display={'flex'} alignItems="center" gap={0}>
        {children}{' '}
        <Iconify
          icon="mdi:information"
          width={16}
          height={16}
          sx={{
            marginLeft: 1,
            color: 'primary.main',
            fontSize: 24,
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default CoreInfoTooltip;
