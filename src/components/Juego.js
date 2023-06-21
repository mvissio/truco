import React, {useState, useEffect} from 'react';
import Tablero from './Tablero';

const Juego = ({jugador1Cartas, jugador2Cartas, sumarJugadorGanador}) => {
    const [cartasJugador1, setCartasJugador1] = useState(jugador1Cartas);
    const [cartasJugador2, setCartasJugador2] = useState(jugador2Cartas);
    const [turnoJugador1, setTurnoJugador1] = useState(true);
    const [cartasJugadas, setCartasJugadas] = useState({jugador1: [], jugador2: []});
    const [rondaActual, setRondaActual] = useState(1);
    const [rondas, setRondas] = useState([
      {ronda: 1, ganador: ''},
      {ronda: 2, ganador: ''},
      {ronda: 3, ganador: ''},
    ]);
    const [puntosTruco, setPuntosTruco] = useState(1);
    const jugarCarta = (jugador, cartaIndex) => {
      if (jugador === 'Jugador 1') {
        setCartasJugadas({...cartasJugadas, jugador1: [...cartasJugadas.jugador1, cartasJugador1[cartaIndex]]});
        setCartasJugador1(cartasJugador1.filter((carta, index) => index !== cartaIndex));
        setTurnoJugador1(false);
      } else {
        setCartasJugadas({...cartasJugadas, jugador2: [...cartasJugadas.jugador2, cartasJugador2[cartaIndex]]});
        setCartasJugador2(cartasJugador2.filter((carta, index) => index !== cartaIndex));
        setTurnoJugador1(true);
      }
    };

    useEffect(() => {
      let ganadorRonda = '';
      switch (rondaActual) {
        case 1:
          if (cartasJugadas.jugador1.length === 1 && cartasJugadas.jugador2.length === 1) {
            ganadorRonda = calcularGanadorRonda(cartasJugadas.jugador1[0], cartasJugadas.jugador2[0])
            setRondas(rondas.map(ronda => ronda.ronda === 1 ? {...ronda, ganador: ganadorRonda} : ronda));
          }
          break;
        case 2:
          if (cartasJugadas.jugador1.length === 2 && cartasJugadas.jugador2.length === 2) {
            ganadorRonda = calcularGanadorRonda(cartasJugadas.jugador1[1], cartasJugadas.jugador2[1])
            setRondas(rondas.map(ronda => ronda.ronda === 2 ? {...ronda, ganador: ganadorRonda} : ronda));
          }
          break;
        case 3:
          if (cartasJugadas.jugador1.length === 3 && cartasJugadas.jugador2.length === 3) {
            ganadorRonda = calcularGanadorRonda(cartasJugadas.jugador1[2], cartasJugadas.jugador2[2])
            setRondas(rondas.map(ronda => ronda.ronda === 3 ? {...ronda, ganador: ganadorRonda} : ronda));
          }
          break;
      }
      if (ganadorRonda !== '') {
        if (rondaActual <= 3) {
          setRondaActual(rondaActual + 1);
        }
        setTurnoJugador1(ganadorRonda === 'Jugador 1' || ganadorRonda === 'Empate');
      }
    }, [cartasJugadas]);

    useEffect(() => {
      if (rondas[0].ganador === 'Empate' && rondas[1].ganador !== '') {
        sumarPuntosTruco(rondas[1].ganador );
      } else {
        debugger
        if (rondas[0].ganador !== '') {
          if (rondas[1].ganador === 'Empate') {
            sumarPuntosTruco(rondas[0].ganador );
          } else {
            if (rondas[0].ganador === rondas[1].ganador) {
              sumarPuntosTruco(rondas[0].ganador );
            }
            if (rondas[1].ganador !== '' && rondas[2].ganador === 'Empate') {
              sumarPuntosTruco(rondas[0].ganador );
            }
            if (rondas[1].ganador !== '' && rondas[2].ganador !== '') {
                let conteo = rondas.reduce((acumulador, ronda) => {
                  if (ronda.ganador === 'Jugador 1') {
                    acumulador.Jugador1++;
                  } else {
                    acumulador.Jugador2++;
                  }
                  return acumulador;
                }, {Jugador1: 0, Jugador2: 0});

                const ganador = conteo.Jugador1 > conteo.Jugador2 ? 'Jugador 1' : 'Jugador 2';

              sumarPuntosTruco(ganador );
            }
          }
        }
      }
    }, [rondas]);

    const sumarPuntosTruco = (ganador) => {
      sumarJugadorGanador(ganador === 'Jugador 1' ? 0 : 1, puntosTruco);
    }

    const calcularGanadorRonda = (cartaJugador1, cartaJugador2) => {
      if (cartaJugador1.puntos === cartaJugador2.puntos) {
        return 'Empate'
      }
      return (cartaJugador1.puntos > cartaJugador2.puntos) ? 'Jugador 1' : 'Jugador 2';
    }

    return (
      <div>
        <Tablero jugadores={['Jugador 1', 'Jugador 2']} cartasJugador1={cartasJugador1} cartasJugadas={cartasJugadas}
                 cartasJugador2={cartasJugador2} jugarCarta={jugarCarta} turnoJugador1={turnoJugador1} />
      </div>
    );
  }
;

export default Juego;
