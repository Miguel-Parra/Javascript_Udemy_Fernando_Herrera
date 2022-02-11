const mig = {
    nombre: 'Miguel',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}
const isa = {
    nombre: 'Isaac',
    edad: 20,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

function Persona (nombre, edad){
this.nombre = nombre;
this.edad = edad;

this.imprimir =  function() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
}
}

const maria = new Persona('Maria', 18)
const pamela = new Persona('Pamela', 24)
console.log(maria)
console.log(pamela)