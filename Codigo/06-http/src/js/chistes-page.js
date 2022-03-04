import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtroChiste, olList, hijosOl;

const crearChistesHtml = () => {
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>
        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group">
          
        </ol>`
    body.innerHTML = html
}

const eventos = () => {
olList = document.querySelector('ol');
btnOtroChiste = document.querySelector('button');
btnOtroChiste.addEventListener('click', async ()=> {
    btnOtroChiste.disabled = true; //bloqueamos el boton hasta obtener el chiste
    dibujarChiste(await obtenerChiste());
    btnOtroChiste.disabled = false; 
})
}

const dibujarChiste = ({id, value}) => {
hijosOl = olList.childElementCount + 1; 
const olItem = document.createElement('li');
olItem.innerHTML = `${hijosOl}. <b>${id}</b>: ${value}`;
olItem.classList.add('list-group-item');
olList.append(olItem);
}

export const init = () => {
    crearChistesHtml();
    eventos();
}

/*  */


// import { obtenerChiste } from "./js/http-provider";

// obtenerChiste()
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(err => {
//         console.log(err);
//     })