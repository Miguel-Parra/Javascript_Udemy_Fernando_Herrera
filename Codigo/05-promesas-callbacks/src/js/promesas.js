

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

// FORMA SIN ASYNC
export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => {
                resolve(heroe);
            }, 1000);

        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    })
}

//FORMA CON ASYN
export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (heroe) {
        // resolve(heroe);
        return heroe;
    } else {
        // reject(`No existe un héroe con el id ${id}`);
        // throwError(`No existe un héroe con el id ${id}`); // arroja más información del error
        throw `No existe un héroe con el id ${id}`;
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa Lenta') }, 2000)
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa Media') }, 1500)
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promesa Rapida') }, 1000)
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}