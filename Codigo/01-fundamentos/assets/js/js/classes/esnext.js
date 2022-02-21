class Rectangulo {
    #area = 0;
    constructor(base=0, altura=0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
    #calcularArea(){
        return this.#area *2
    }
    llamarCalcularArea(){
        console.log(`metodo privado:`);
        this.#calcularArea();
    };
    

}


const rectangulo = new Rectangulo(5,8);
rectangulo.area = 100
console.log(rectangulo);
console.log(rectangulo.llamarCalcularArea());