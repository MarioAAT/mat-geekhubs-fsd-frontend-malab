import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import mesa1 from '../images/mesa1.jpg';


export const MesaCard = ({mesat}) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Image src={mesa1} />
        <Card.Body>
            <Card.Title>{mesat.nombre}</Card.Title>
            <Card.Text>{mesat.descripcion}</Card.Text>
            <Card.Text> <p>TAMAÑO</p> {mesat.tamaño}</Card.Text>
        </Card.Body>
        </Card>
        </>
    )
}
