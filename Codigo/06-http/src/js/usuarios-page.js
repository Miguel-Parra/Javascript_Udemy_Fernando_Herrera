import { obtenerUsuarios } from "./http-provider";

const body = document.body;
let tablebody;
let correlativo = 0;

const crearHtml = () => {
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;
    // const div = document.createElement('div');
    // div.innerHTML = html;
    // body.appendChild( div );
    body.innerHTML = html;
    tablebody = document.querySelector('tbody');
}

const crearFilaUsuario = (usuario) => {
    correlativo += 1;
    const html = `
        <td scope="col"> ${correlativo} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tablebody.append(tr);
}


export const init = async () => {
    crearHtml();
    correlativo = 0;
    (await obtenerUsuarios()).forEach(crearFilaUsuario)
}

