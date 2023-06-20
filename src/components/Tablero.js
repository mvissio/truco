import React from 'react';
import { Box } from '@mui/material';
import Jugador from './Jugador';

const Tablero = ({ jugadores, cartasJugadores }) => (
  <Box display="flex" justifyContent="space-around" alignItems="center" height="100vh">
    {jugadores.map((jugador, index) =>
      <Jugador key={index} jugador={jugador} cartas={cartasJugadores[index]} />
    )}
  </Box>
);

export default Tablero;
