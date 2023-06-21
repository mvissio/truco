import React from 'react';
import Carta from './Carta';
import {Col, Container, Row} from "react-bootstrap";
const CartasEnJuego = ({cartasJugadas}) => {
  return (
    <>
      <Row>
        <Col sm="6">
          <h5 className="text-center">Cartas Jugadas de Jugador 1</h5>
          {cartasJugadas.jugador1 ? cartasJugadas.jugador1.map((carta, index) => (
            <Carta key={index} carta={carta} />
          )) : null}
        </Col>
        <Col sm="6">
          <h5 className="text-center">Cartas Jugadas de Jugador 2</h5>
          {cartasJugadas.jugador2 ? cartasJugadas.jugador2.map((carta, index) => (
            <Carta key={index} carta={carta} />
          )) : null}
        </Col>
      </Row>
    </>
  );
};

export default CartasEnJuego;
