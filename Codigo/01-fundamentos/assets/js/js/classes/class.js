class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias de la clase';
    };
    static mensaje() {
        console.log(this.nombre); //undefined
        console.log('Hola a todos, soy un metodo estatico')
    }
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase() {
        this.quienSoy()
        console.log(`Mi frase es ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', codigo = 'Spiderman', 'Tu amigable vecino');
const ironman = new Persona('Tony Stark', codigo = 'Ironman', 'Yo soy Ironman');
// console.log(spiderman);
// spiderman.quienSoy();
// spiderman.miFrase();
console.log(spiderman)

spiderman.setComidaFavorita = 'pie de cereza'
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna)

