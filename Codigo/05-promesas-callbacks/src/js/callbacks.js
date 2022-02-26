const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin  morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las arañas'
    },
}

//callback retorna el heroe 
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if (heroe){
        callback(null,heroe); 
    }else{
        //Un error;
        callback(`No existe un héroe con el id ${id}`);     }
    // callback(heroe); //enviando heroe como argumento
}