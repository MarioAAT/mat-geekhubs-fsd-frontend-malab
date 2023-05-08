import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../userDetail/userSlice';
import { Col, Container, Row } from "react-bootstrap";
import { getAllReservas } from '../../services/apiCalls';
import CardReserva from '../../components/CardReserva';
import '../reservas/Reservas.css'
import { addChoosenReserva } from '../userDetail/reservaSlice';

export const AllReservas = () => {

    const [allReservas, setAllReservas] = useState([]);
    const ReduxCredentials = useSelector(userData)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(allReservas.length === 0) {
            getAllReservas(ReduxCredentials?.credentials?.token)
            .then((result) => {
                setAllReservas(result.data.lista_reservas);
                
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [allReservas]);
    console.log(allReservas)


  return (
    <>
        <Container className='contCardReservas'>
            <Row>
            <Col><h1>Reservas</h1></Col>
            </Row>
        {allReservas.length > 0 ? 
            (<Row className='mt-5'>
                {allReservas.map( (reservas) => {
                    return (
                        <Col key={reservas.id}  className='mt-5'>
                            <CardReserva appo={reservas} className='mt-5'/>
                        </Col>
                    );
                })}
            </Row>)
            : 
            (<div>......</div>)
        }        
        </Container>
    </>
  )
}
