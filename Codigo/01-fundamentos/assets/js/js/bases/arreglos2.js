let juegos = ['Zelda', 'Mario', 'Metroid', 'Pokemon']
console.log('Largo: ', juegos.length);

let primero = juegos[2 - 2]
let ultimo = juegos[juegos.length - 1]

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
console.log(elemento, indice, arr)
})

let nuevaLongitud = juegos.push('ResidentEvil')
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Devil May Cry')
console.log(nuevaLongitud, juegos);

let juegoBorrado = juegos.pop()
console.log(juegoBorrado)

let posicion = 1
let juegosBorrados = juegos.splice(posicion, 2)
console.log(juegosBorrados)

let buscar = juegos.indexOf('Devil May Cry')
console.log(buscar)

