import React from 'react';
import { Box, Typography } from '@mui/material';
import Carta from './Carta';

const Jugador = ({ jugador, cartas }) => (
  <Box>
    <Typography variant="h5">{jugador}</Typography>
    <div>
      {cartas && cartas.map((carta, index) => <Carta key={index} carta={carta} />)}
    </div>
  </Box>
);

export default Jugador;
