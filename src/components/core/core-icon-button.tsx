import React from 'react';

import { Box, SxProps, Tooltip, IconButton, IconButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends IconButtonProps {
  children: React.ReactNode;
  disabledTooltipText?: string;
  sx?: SxProps;
  tooltipText?: string;
  disabled?: boolean;
}

const CoreIconButton: React.FC<Props> = ({
  children,
  disabledTooltipText,
  sx,
  tooltipText,
  disabled,
  ...other
}) => {
  const finalTooltipText = disabled && disabledTooltipText ? disabledTooltipText : tooltipText;

  return (
    <Tooltip title={finalTooltipText || ''} arrow>
      <Box sx={sx}>
        <IconButton disabled={disabled} sx={sx} {...other}>
          {children}
        </IconButton>
      </Box>
    </Tooltip>
  );
};

export default CoreIconButton;
