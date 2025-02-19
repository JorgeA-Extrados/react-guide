import { Button } from '@mui/material';
import React from 'react';

export default function BtnCustom({
  endIcon,
  startIcon,
  label = 'Continuar',
  variant = 'filled',
  onClick = () => {
    return;
  },
}) {
  return (
    <Button
      variant={variant}
      sx={{
        textTransform: 'none',
        bgcolor: variant === 'filled' ? '#e3602d' : null,
        color: variant === 'filled' ? '#ffffff' : '#e3602d',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '12px',
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}