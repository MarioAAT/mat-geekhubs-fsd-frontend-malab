import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '../layouts/userDetail/userSlice';

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

export const allUsers = async ( token ) => {
    console.log("Aquí esta el token----->",token)
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return await axios.get(`${root}/api/allusuarios`, config);
}

export const getAllReservas = async (token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return await axios.get(`${root}/api/reservas`, config)
}

export const getUsuarioData = async (token) => {
    console.log("Aquí esta el token----->",token)
    let config = {
        headers: {
            Authorization: `Bearer ${token}` 
        },
    };
        return await axios.get(`${root}/api/usuario/perfil`, config)
}

export const getReservaUsuario = async (token) => {

    let config = {
        headers: {
            Authorization: `Bearer ${token}` 
        },
        };
        return await axios.get(`${root}/api/reservas/usuario`, config)
}

export const editPerfil = async (body, token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.put(`${root}/api/usuarios/edit`, body, config)
}

export const editAdminPerfil = async (id, body, token,) => {
    console.log(token, body)
    console.log(id)
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.put(`${root}/api/usuario/edit/admin/${id}`, body, config)
}

export const editReserva = async (id, body, token ) => {
    console.log("----------------------------------------------",)
    console.log("esto vale body", body)
    console.log("Esto vale tokensss:",token)
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.put(`${root}/api/reservas/${id}`, body, config)

}
