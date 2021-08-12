/*
 *2C = Two of Clubs 
 *2D = Two of Diamonds 
 *2H = Two of Hearts 
 *2S = Two of Spades 
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

//Esta funcion crea una nueva baraja
const crearDeck = () => {
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
    console.log(deck); //
    console.log(carta); // carta debe ser de la baraja
    return carta;
}


// pedirCarta();
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return !(isNaN(valor)) ? valor * 1 : (valor === 'A') ? 11 : 10;
}

const valor = valorCarta('8D'); //2 diamonds
console.log({valor});