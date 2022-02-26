import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';


const heroId1 = 'capi';
const heroId2 = 'iron';
const heroId3 = 'spider';

// buscarHeroeCallback(heroId1, (error, hero) => {
//     if (error) { return console.log(error) }
//     buscarHeroeCallback(heroId2, (error, hero2) => {
//         if (error) { return console.log(error) }
//         buscarHeroeCallback(heroId3, (error, hero3) => {
//             if (error) { return console.log(error) }
//             console.log(`Enviando a ${hero.nombre} y ${hero2.nombre} y ${hero3.nombre} a la mision`)
//         })
//         console.log(`Enviando a ${hero.nombre} y ${hero2.nombre}  a la mision`)
//     })
//     console.log(`Enviando a ${hero.nombre}  a la mision`)

// })


// buscarHeroe(heroId1)
//     .then((heroe) => {
//         return buscarHeroe(heroId2)
//     })
//     .then((heroe2) => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`)

//     })
//     .catch((error) => {
//         console.log(error);
//     })

Promise.all([buscarHeroe(heroId1), buscarHeroe(heroId2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
    })
    .catch((error) => {
        alert(error);
    })
    .finally(() => {
        console.log('finally')
    })


console.log('Fin del programa')