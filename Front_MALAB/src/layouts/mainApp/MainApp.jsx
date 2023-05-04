import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { AllUsuarios } from '../allUsuarios/AllUsuarios';
import { UsuarioDetail } from '../allUsuarios/UsuarioDetail';
import { Home } from '../home/Home';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import { AllReservas } from '../reservas/AllReservas';
import { Reservas } from '../reservas/Reservas';

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
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
