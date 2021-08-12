function saludar (nombre){
    // console.log('Hola ' + nombre);
    // console.log(arguments)
    return [1,2]
    //Esto no se ejectará
    console.log("EJECUTAMOS");
}
const retornoDeSaludar = saludar('Angel')
console.log(retornoDeSaludar[0,1])

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);

}
const saludarFlecha = nombre => {
    console.log('Hola flecha' + nombre);
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola flecha'+ nombre);
}

// retornoDeSaludar = saludar('Angel')
// console.log({retornoDeSaludar})
// saludar('Miguel', 40, true, 'Costa Rica');
// saludarFlecha()
// saludar();
// saludar();


function sumar(a,b ){
    return a + b
}

const sumar2 = (a,b) => {
    return a+b;
}

function getAleatorio () {
    return Math.random();
}
console.log(getAleatorio())

const sumar3 = (a,b) => a+b;
console.log(sumar3(2,2))

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());