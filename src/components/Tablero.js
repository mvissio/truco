import React, {useState} from 'react';
import Jugador from './Jugador';
import {Row, Col} from 'react-bootstrap';
import CartasEnJuego from "./CartasEnJuego";
const Tablero = ({ cartasJugador1, cartasJugador2, cartasJugadas , jugarCarta, turnoJugador1 }) => {

  return (
    <>
      <Row className="d-flex justify-content-sm-between">
        <Col xs="3">
          <Jugador jugador="Jugador 1" cartas={cartasJugador1} turnoJugador={turnoJugador1} jugarCarta={jugarCarta}/>
        </Col>
        <Col xs="6">
          <CartasEnJuego cartasJugadas={cartasJugadas}/>
        </Col>
        <Col xs="3">
          <Jugador jugador="Jugador 2" cartas={cartasJugador2} turnoJugador={!turnoJugador1} jugarCarta={jugarCarta}/>
        </Col>
      </Row>
    </>
  )
};

export default Tablero;
