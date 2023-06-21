import React from 'react';
import {Card, Image} from 'react-bootstrap';
const Carta = ({carta, onDoubleClick, noMostrar}) => {
  const cartaOculta = {
    "nombre": "reverso",
    "imagen": "reverso.png",
    "puntos": 0
  };
  return (
    <Card style={{maxWidth: 200, margin: '10px auto'}} onDoubleClick={noMostrar ? null : onDoubleClick}>
      {noMostrar ? <Image src={`img/${cartaOculta.imagen}`} alt={carta?.nombre} thumxbnail /> :
        <Image src={`img/${carta?.imagen}`} alt={carta?.nombre} thumbnail />}
    </Card>
  )
};

export default Carta;
