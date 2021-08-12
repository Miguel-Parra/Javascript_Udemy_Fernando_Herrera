

function imprimeArgumentos() {
    console.log(arguments)
}

imprimeArgumentos(10, true, false, 'Miguel', 'Hola')

const imprimeArgumentos2 = (edad, ...arg) => {
    // console.log({edad, arg});
    return arg;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Miguel', 'Hola')
console.log({vivo});
console.log({casado, vivo, nombre, saludo});

const crearPersona  = (nombre, apellido) => ({nombre, apellido})
const {apellido: nuevoApellido} = crearPersona('Miguel', 'Parra')
console.log({nuevoApellido });

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
   console.log({nombre});
   console.log({codeName});
   console.log({vivo});
   console.log({edad});
   console.log({trajes});
}

imprimePropiedades(tony)