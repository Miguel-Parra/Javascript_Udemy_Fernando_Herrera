import './styles.css'
import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from "./js/promesas";
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';
heroesCiclo();

// promesaLenta.then(mensaje => console.log(mensaje))
// promesaLenta.then(console.log); // es lo mismo de arriba
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
// .then(console.log)
// .catch(console.warn)

// buscarHeroe('capi')
// .then(heroe => console.log(heroe))
// .catch(console.warn);

// buscarHeroeAsync('iron3')
// .then(heroe => console.log(heroe))
// .catch(console.warn);

// const heroes = obtenerHeroesArr()
// console.log(heroes);

// console.time('await')
// obtenerHeroeAwait('capi2')
//     .then(heroe => {
//         console.log(heroe);
//         console.timeEnd('await');
//     })
//     .catch(console.warn)

heroeIfAwait('iron')

