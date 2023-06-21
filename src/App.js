import React, {useState, useEffect} from 'react';
import Juego from './components/Juego';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {shuffle} from "./helper/suffle";
import cartasData from "./data/cartas.json";
import Puntaje from "./components/Puntaje";

const App = () => {
  const [statusJuego, setStatusJuego] = useState(false);
  const [puntajeJugadores, setPuntajeJugadores] = useState([0, 0]);
  const [tablero, setTablero] = useState([[], []]);
  const [cartasJugadores, setCartasJugadores] = useState([[], []]);
  const [cartasEnJuego, setCartasEnJuego] = useState([]);

  const iniciarJuego = () => {
    let cartasBarajadas = shuffle([...cartasData]);
    const jugador1Cartas = cartasBarajadas.splice(0, 3);
    const jugador2Cartas = cartasBarajadas.splice(0, 3);
    setCartasJugadores([jugador1Cartas, jugador2Cartas]);
    setTablero([[], []]); // Reiniciamos el tablero
    setCartasEnJuego([]); // Reiniciamos las cartas en juego
    setStatusJuego(true);

  };
  const reiniciarJuego = () => {
    setCartasJugadores([[], []]);
    setTablero([[], []]); // Reiniciamos el tablero
    setCartasEnJuego([]); // Reiniciamos las cartas en juego
    setStatusJuego(false);
    setPuntajeJugadores([0, 0]);
  }

  const sumarJugadorGanador = (jugador, puntosSumados) => {
    let puntaje = [...puntajeJugadores];
    puntaje[jugador] += puntosSumados;
    setPuntajeJugadores(puntaje);
    setStatusJuego(false);
  }

  return (
    <Container className="mt-5" style={{maxWidth: "100%"}}>
      <h2 className="text-center">Juego de Truco</h2>

      <Row className="justify-content-md-center">
        <Col xs lg="2" className="justify-content-sm-center">
          <Button variant="primary" onClick={iniciarJuego} disabled={statusJuego}>Iniciar Juego</Button>
        </Col>
        <Col xs lg="2" className="justify-content-sm-center">
          <Button variant="secondary" onClick={reiniciarJuego}>Reiniciar Juego</Button>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Puntaje puntajeJugadores={puntajeJugadores} />
      </Row>
      {statusJuego && (
        <>
          <Row>
            <Juego cartasJugadores={cartasJugadores} jugador1Cartas={cartasJugadores[0]}
                   jugador2Cartas={cartasJugadores[1]} sumarJugadorGanador={sumarJugadorGanador}/>
          </Row>
        </>
      )}
    </Container>
  );
};

export default App;
