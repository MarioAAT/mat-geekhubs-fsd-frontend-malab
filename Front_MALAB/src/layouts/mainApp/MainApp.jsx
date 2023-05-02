import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Home } from '../home/Home';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
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
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
