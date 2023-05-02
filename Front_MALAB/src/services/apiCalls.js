import axios from 'axios';

const root = "http://localhost:3000"

export const logMe = async (body) => {
    return await axios.post(`${root}/api/login`, body);
}

export const nuevoUsuario = async (body) => {
    return await axios.post(`${root}/api/nuevousuario`, body)
}

export const nuevaReserva = async ( body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer '+ token,  
        }};
        return await axios.post(`${root}/api/nuevareserva`,body, config)
}
