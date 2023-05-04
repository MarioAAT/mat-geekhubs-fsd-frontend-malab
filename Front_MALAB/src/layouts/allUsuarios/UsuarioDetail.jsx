import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { detailData } from '../userDetail/detailSlice';
import '../allUsuarios/UsuarioDetail.css'

export const UsuarioDetail = () => {

    const detailRedux = useSelector(detailData);

    useEffect(() => {
    },[])

    return (
        <>
        <div className='allUsersDesigne'>
            <div className='titulo'><h1>Detalle de usuario</h1></div>
            <div className='usersbox'>
                <div className='texto'>Nombre(s)</div>
                {detailRedux?.choosenObject?.nombre}
                <div className='texto'>Apellido(s)</div>
                {detailRedux?.choosenObject?.apellido}
                <div className='texto'>Email</div>
                {detailRedux?.choosenObject?.email}
                <div className='texto'>Telefono</div>
                {detailRedux?.choosenObject?.telefono}
            </div>
        </div>
        </>
    )
}
