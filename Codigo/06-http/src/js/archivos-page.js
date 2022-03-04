import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;


const crearInputFile = () => {
    const html = `
<h1 class="mt-5">Subir archivos</h1>
<hr>
<label>Selecciona una fotografía: </label>
<input type="file" accept="image/png, image/jpeg">
<br>
<img id="foto" class="img-thumbnail" src="">
`;
    body.innerHTML = html;
    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto')
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        subirImagen(file)
            .then(url => {
                imgFoto.src = url;
            })
            .catch(console.warn)
    })
}

export const init = () => {
    crearInputFile();
    eventos();
}