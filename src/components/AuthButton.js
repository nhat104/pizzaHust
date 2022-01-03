import { Box, Button } from '@mui/material';
import React from 'react';

export default function AuthButton({ name }) {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
      <Button
        type="submit"
        variant="contained"
        sx={{
          fontFamily: 'Montserrat',
          bgcolor: '#FF8000',
          p: '6px 40px',
          mb: 6,
          '&:hover': {
            bgcolor: '#FF8000',
          },
        }}
      >
        {name}
      </Button>
    </Box>
  );
}
