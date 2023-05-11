import React from 'react';
import { Caroussel } from '../../components/Carousel';
import { Seccion } from '../../components/Seccion';
import { DosSeccion } from '../../components/DosSeccion';
import './Home.css';

export const Home = () => {
    return (
        <>
        <Caroussel/>
        <hr></hr>
        <Seccion/>
        <hr></hr>
        <DosSeccion/>
        <hr></hr>
        </>
    )
}
