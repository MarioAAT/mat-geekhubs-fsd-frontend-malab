import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { AllUsuarios } from '../allUsuarios/AllUsuarios';
import { UsuarioDetail } from '../allUsuarios/UsuarioDetail';
import { Home } from '../home/Home';
import { Login } from '../login/Login';
import { MesasTrabajo } from '../mesas/MesasTrabajo';
import { AdminEditPerfil } from '../perfilUsuario/AdminEditPerfil';
import { EditarPerfil } from '../perfilUsuario/EditarPerfil';
import { PerfilUsuario } from '../perfilUsuario/PerfilUsuario';
import { Register } from '../register/Register';
import { AllReservas } from '../reservas/AllReservas';
import { EditarReserva } from '../reservas/EditarReserva';
import { Reservas } from '../reservas/Reservas';
import { UsuarioEditarReserva } from '../reservas/UsuarioEditarReserva';
import { UsuarioReservas } from '../reservas/UsuarioReservas';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/reserva' element={<Reservas/>}/>
        <Route path='/allusuarios' element={<AllUsuarios/>}/>
        <Route path='/infousuario' element={<UsuarioDetail/>}/>
        <Route path='/allreservas' element={<AllReservas/>}/>
        <Route path='/perfil' element={<PerfilUsuario/>}/>
        <Route path='/misreservas' element={<UsuarioReservas/>}/>
        <Route path='/editperfil' element={<EditarPerfil/>}/>
        <Route path='/admineditperfil' element={<AdminEditPerfil/>}/>
        <Route path='/editarreserva' element={<EditarReserva/>}/>
        <Route path='/usuarioeditreserva' element={<UsuarioEditarReserva/>}/>
        <Route path='/mesastrabajo' element={<MesasTrabajo/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
