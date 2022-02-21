class Persona {
    static porObjeto({nombre, persona, pais}) {
        return new Persona(nombre, persona, pais);

    }
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';
const mike = {
    nombre: 'Miguel',
    apellido: 'Parra',
    pais: 'Ecuador'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const perosana2 = Persona.porObjeto(mike);
persona1.getInfo();
perosana2.getInfo();