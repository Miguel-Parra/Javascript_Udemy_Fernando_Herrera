let a = 11;

if (a >= 10) { //excepciones  undefined, null, una asignacion
    console.log('a es mayor a 10');
} else {
    console.log('a es menor a 10');
}

console.log('Fin de program');

const hoy = new Date();
// console.log(hoy);
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');

    // if (dia === 1) {
    //     console.log('Es Lunes');

    // } else {
    //     console.log('No es domingo ni lunes');

    // }
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes ni domingo');
}

//Sin usar If else, o switch, unicamente objetos para realizar la misma tarea

dia = 6;
 const diasLetras = {
    0: ()=> 'domingo-0',
    1: ()=> 'lunes-1',
    2: ()=> 'martes-2',
    3: ()=> 'miercoles-3',
    4: ()=> 'jueves-4',
    5: ()=> 'viernes-5',
    6: ()=> 'sabado-6',
}
const diaLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diasLetras[dia]() || 'Dia no definido' );
