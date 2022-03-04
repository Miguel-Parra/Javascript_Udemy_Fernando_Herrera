const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'ywjc9e8o';
const cloudurl = 'https://api.cloudinary.com/v1_1/dogtty/upload';


const obtenerChiste = async () => {
    try {
        const respuesta = await fetch(jokeUrl);
        if (!respuesta.ok) throw 'No se pudo realizar la peticion 2';
        const { icon_url, id, value } = await respuesta.json();
        return { icon_url, id, value };
        //  return { //esto es lo mismo que arriba solo que podemos cambiar el 
        // nombre de las claves
        //     icon_url: icon_url,
        //     id: id,
        //     value: value,
        // }
    } catch (error) {
        throw error;
    }
}

const obtenerUsuarios = async () => {
    const resp = await fetch(usuariosUrl);
    const { data: usuarios } = await resp.json(); //renombrando a usuarios la 
    // propiedad data que venia del objeto de respuesta
    return usuarios;
}

export {
    obtenerChiste,
    obtenerUsuarios
}


//el archivoSubir seria de tipo file o archivoSubir::File
export const subirImagen = async (archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir)
    try {
        const resp = await fetch(cloudurl, {
            method: 'POST',
            body: formData
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (err) {
        throw err;
    }
}