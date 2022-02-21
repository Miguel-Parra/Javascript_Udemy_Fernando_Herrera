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

class Heroe extends Persona {
    clan = 'sin clan';
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase)
        this.clan = 'Los Avengers'
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`)
        super.quienSoy();
    }
}
const spiderman = new Heroe('Peter Parker', codigo = 'Spiderman', 'Tu amigable vecino');
// const spiderman = new Heroe();
console.log(spiderman)
spiderman.quienSoy();