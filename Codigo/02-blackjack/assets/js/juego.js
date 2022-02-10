/*
 *2C = Two of Clubs 
 *2D = Two of Diamonds 
 *2H = Two of Hearts 
 *2S = Two of Spades 
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0;
puntosComputadora = 0;

//Referencias del HTML
const btn_pedir = document.querySelector('#btn_pedir');
const btn_detener = document.querySelector('#btn_detener');
const btn_nuevo = document.querySelector('#btn_nuevo');
const puntosHTML = document.querySelectorAll('small');
const cartasJugador = document.querySelector('#jugador-cartas');
const cartaComputador = document.querySelector('#computadora-cartas')




//Esta funcion crea una nueva baraja
const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {

            deck.push(i + tipo)
        }
    }
    for (tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.warn(deck);
    return deck;
}

crearDeck();

//esta funcion me permite pedir una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop()
    // console.log(deck); //
    // console.log(carta); // carta debe ser de la baraja
    return carta;
}


// pedirCarta();
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    console.log(valor)
    return !(isNaN(valor)) ? valor * 1 : (valor === 'A') ? 11 : 10;
}
// TURNO DE LA COMPUTADORA
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/10C.png"></img>
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        cartaComputador.append(imgCarta)
        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))

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

//EVENTOS
btn_pedir.addEventListener('click', () => {
    btn_detener.disabled = false;
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/10C.png"></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    cartasJugador.append(imgCarta)

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
    turnoComputadora(puntosJugador);

})

btn_nuevo.addEventListener('click', () => {
    console.clear();
    crearDeck();
    btn_detener.disabled = true;
    btn_pedir.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    cartasJugador.innerHTML ='';
    cartaComputador.innerHTML='';
})
