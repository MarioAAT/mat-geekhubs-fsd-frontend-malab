import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Home } from '../home/Home';
import { Login } from '../login/Login';
import { Register } from '../register/Register';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </>
  )
}
