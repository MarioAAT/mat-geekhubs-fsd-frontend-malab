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
            'Authorization': 'Bearer' + token, 
        }
    };
    return await axios.get(`${root}/api/allusuarios`, config, token);
}

export const getAllReservas = async (token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return await axios.get(`${root}/api/reservas`, config)
}
