import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../home/Home';

export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}
