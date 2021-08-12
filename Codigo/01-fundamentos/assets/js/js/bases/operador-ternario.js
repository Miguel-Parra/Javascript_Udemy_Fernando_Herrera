//Entrar a un sitio web, para consultar si esta abierto hoy
//Dias de semana se abre a las 11, pero fines de semana a las 9

const dia = 1; //0: domingo... 1: Lunes
const horaActual = 10;

let horaApertura;
let mensaje; // esta abierto, esta cerrado, hoy abrimos a alas ....


// if (dia ===0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`
// }
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje })

