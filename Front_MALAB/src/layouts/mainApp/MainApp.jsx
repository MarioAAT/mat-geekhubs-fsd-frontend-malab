import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../home/Home';
import { Login } from '../login/Login';

export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}
