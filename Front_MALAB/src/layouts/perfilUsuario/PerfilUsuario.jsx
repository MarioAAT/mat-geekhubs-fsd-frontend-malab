import React, { useState, useEffect } from 'react';
import { userData } from '../userDetail/userSlice';
import { useSelector } from 'react-redux';
import { getUsuarioData } from '../../services/apiCalls';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PerfilUsuario = () => {

    const detailRedux = useSelector(userData);
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    });

    useEffect(() => {
        if(usuario.nombre === "") {
            getUsuarioData(detailRedux?.credentials?.token)
                .then((result) => {
                    setUsuario({
                        nombre: result.data.usuario.nombre,
                        apellido: result.data.usuario.apellido,
                        email: result.data.usuario.email,
                        telefono: result.data.usuario.telefono
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [usuario]);
    console.log(usuario)

    return (
            <>
            <div className='allUsersDesigne'>
                <div><h1>Perfil</h1></div>
                <div className='usersbox'>
                    <div className='texto'>Nombre(s)</div>
                    {usuario.nombre}
                    <div className='texto'>Apellido(s)</div>
                    {usuario.apellido}
                    <div className='texto'>Email</div>
                    {usuario.email}
                    <div className='texto'>Teléfono</div>
                    {usuario.telefono}
                </div>
                <Button as={Link} to={'/editperfil'} >Edit Profile</Button>
            </div>
            </>
    )
}
