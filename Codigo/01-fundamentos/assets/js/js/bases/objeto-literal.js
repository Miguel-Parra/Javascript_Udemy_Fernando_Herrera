let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }, 
   "ultima-pelicula": 'Infinity War'
}
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Direccion', personaje.coords.lat);
console.log('Nro trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length -1])

const x = 'vivo'
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje['ultima-pelicula']);

delete personaje.edad
personaje.casado = true;
console.log(personaje)

const entriesPares = Object.entries(personaje)
console.log(entriesPares);

Object.freeze(personaje)
personaje.dinero = 1000000000;
console.log(personaje);
personaje.direccion.ubicacion = "Ecuador";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades);
const valores = Object.values(personaje)
console.log(valores);