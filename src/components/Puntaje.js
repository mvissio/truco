import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

const Puntaje = ({ puntajeJugadores }) => (
  <Container className="mt-5">
    <Row className="d-flex justify-content-sm-around">
      {puntajeJugadores.map((puntaje, index) => (
        <Col key={index} className="text-center" sm="3">
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Jugador {index + 1}</Card.Title>
              <Card.Text>Puntaje: {puntaje}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Puntaje;
