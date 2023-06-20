import React, { useState } from 'react';
import { Button } from '@mui/material';
import Tablero from './Tablero';
import Puntaje from './Puntaje';
import cartasData from '../data/cartas.json';

const Juego = () => {
  const [puntajeJugadores, setPuntajeJugadores] = useState([0, 0]);
  const [cartasJugadores, setCartasJugadores] = useState([[], []]);

  const iniciarJuego = () => {
    // Lógica para repartir las cartas y actualizar el estado
    const cartasBarajadas = [...cartasData];
    const jugador1Cartas = cartasBarajadas.splice(0, 3);
    const jugador2Cartas = cartasBarajadas.splice(0, 3);
    setCartasJugadores([jugador1Cartas, jugador2Cartas]);
  };

  return (
    <div>
      <Button variant="contained" onClick={iniciarJuego}>Iniciar Juego</Button>
      <Tablero jugadores={['Jugador 1', 'Jugador 2']} cartasJugadores={cartasJugadores} />
      <Puntaje puntajeJugadores={puntajeJugadores} />
    </div>
  );
};

export default Juego;
