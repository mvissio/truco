import React from 'react';
import { Card, CardMedia } from '@mui/material';

const Carta = ({ carta }) => (
  <Card style={{ maxWidth: 200, margin: '10px auto' }}>
    <CardMedia component="img" height="200" image={`img/${carta?.imagen}`} alt={carta?.nombre} />
  </Card>
);

export default Carta;
