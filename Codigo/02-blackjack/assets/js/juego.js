const miModulo = (() => {
    'use strict'

    let deck = [],
        puntosJugadores = [];

    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    //Referencias del HTML
    const btn_pedir = document.querySelector('#btn_pedir'),
        btn_detener = document.querySelector('#btn_detener'),
        btn_nuevo = document.querySelector('#btn_nuevo'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');


    // Esta funcion inicializa el juego
    const inicializarJuego = (numeroJugadores = 2) => {
        btn_detener.disabled = true;
        btn_pedir.disabled = false;
        puntosJugadores = []
        deck = crearDeck();
        for (let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elemento => elemento.innerText = 0);
        divCartasJugadores.forEach(elemento => elemento.innerHTML = '');
        console.clear();
    }

    //Esta funcion crea una nueva baraja y la retorna
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }
        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo)
            }
        }
        return _.shuffle(deck);;
    }

    //esta funcion me permite pedir una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }
        // console.log(deck); //
        // console.log(carta); // carta debe ser de la baraja
        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        console.log(valor)
        return !(isNaN(valor)) ? valor * 1 : (valor === 'A') ? 11 : 10;
    }

    // Turno: 0= primer jugador y el último será la computadora
    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Empate')
            } else if (puntosMinimos > 21) {
                alert('Perdiste, computadora gana')
            } else if (puntosComputadora > 21) {
                alert('Ganaste')
            } else {
                alert('Perdiste, computadora gana')
            }
        }, 100);
    }

    // TURNO DE LA COMPUTADORA
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta);
            crearCarta(carta, puntosJugadores.length - 1)
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
        determinarGanador();
    }

    //EVENTOS
    btn_pedir.addEventListener('click', () => {
        btn_detener.disabled = false;
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta)
        crearCarta(carta, 0)
        if (puntosJugador > 21) {
            console.log('Lo siento mucho, perdiste');
            btn_pedir.disabled = true;
            btn_detener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('21, Genial!')
            btn_pedir.disabled = true;
            btn_detener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btn_detener.addEventListener('click', () => {
        btn_pedir.disabled = true;
        btn_detener.disabled = true;
        turnoComputadora(puntosJugadores[0]);

    })

    btn_nuevo.addEventListener('click', () => {
        inicializarJuego();
    })

    return {
        nuevoJuego: inicializarJuego
    };
})();



/*
*2C = Two of Clubs 
*2D = Two of Diamonds 
*2H = Two of Hearts 
*2S = Two of Spades 
*/
