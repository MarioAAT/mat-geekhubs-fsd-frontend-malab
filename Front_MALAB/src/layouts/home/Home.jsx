import React from 'react'
import { Caroussel } from '../../components/Carousel'
import { InputText } from '../../components/InputText'
import { NavBar } from '../../components/NavBar'

export const Home = () => {
    return (
        <>
        <NavBar/>
        <Caroussel/>
        <div>Home
        <InputText/>
        </div>
        </>
    )
}
