import React from 'react';
import Carta from './Carta';

const Jugador = ({ jugador, cartas, jugarCarta, turnoJugador }) => (
  <>
    <h4 className="text-center">{jugador}</h4>
    <div>
      {cartas && cartas.map((carta, index) => <Carta key={index} carta={carta} noMostrar={!turnoJugador} onDoubleClick={() => jugarCarta(jugador, index)} />)}
    </div>
  </>
);

export default Jugador;
