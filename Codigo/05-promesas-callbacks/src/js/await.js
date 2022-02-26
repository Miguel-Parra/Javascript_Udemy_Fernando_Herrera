import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe)

const obtenerHeroesArr = async () => {
    return await Promise.all(heroesIds.map(buscarHeroe))
    // const heroesArr = [];
    // for(const id of heroesIds) {
    //   heroesArr.push(buscarHeroe(id));
    // }
    // return await Promise.all(heroesArr);
}

const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.log('CATCH!!!!');
        return {
            nombre: 'SIn nombre',
            poder: 'Sin poder'
        }
    }

}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');
    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe))
    console.timeEnd('HeroesCiclo');
}
export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaa');
    }

}

export {
    obtenerHeroesArr,
    obtenerHeroeAwait
}
