import React from 'react';
import { Box, Typography } from '@mui/material';

const Puntaje = ({ puntajeJugadores }) => (
  <Box display="flex" justifyContent="space-around" alignItems="center" marginTop={4}>
    {puntajeJugadores.map((puntaje, index) => (
      <Typography key={index} variant="h6">
        Puntaje Jugador {index + 1}: {puntaje}
      </Typography>
    ))}
  </Box>
);

export default Puntaje;
