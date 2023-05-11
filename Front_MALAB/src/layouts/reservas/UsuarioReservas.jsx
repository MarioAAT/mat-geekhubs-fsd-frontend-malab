import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import  CardReserva  from '../../components/CardReserva';
import { getReservaUsuario } from '../../services/apiCalls';
import { userData } from '../userDetail/userSlice';

export const UsuarioReservas = () => {

    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();

    const [reserva, setReserva] = useState([]);
    
    useEffect(() => {
        if(reserva.length === 0) {
            getReservaUsuario(ReduxCredentials.credentials.token)
            .then((result) => {
                setReserva(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },[reserva]);

    return (
        <>
            <Container className='contCardReservas'>
                <h1>Mis Reservas</h1>
            {reserva.length > 0 ? 
                (<Row>
                    {reserva.map( (reservas) => {
                        return (
                            <Col key={reservas.id}>
                                <CardReserva appo={reservas}/>
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
