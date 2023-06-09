import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Col, Container, Row  } from 'react-bootstrap';
import { MesaCard } from '../../components/MesaCard';
import { GetAllMesas } from '../../services/apiCalls';
import './MesasTrabajo.css'
import { useSelector } from 'react-redux';
import { userData } from '../userDetail/userSlice';

export const MesasTrabajo = () => {

    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    const [mesas, setMesas] = useState([]);

    useEffect(() => {
        if(mesas.length === 0) {
            GetAllMesas()
            .then((result) => {
                setMesas(result.data.lista_mesas);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [mesas]);

    return (
        <>
            <Container className='contCardReservas'>
                <Row>
                <Col><h1>Mesas de Trabajo</h1></Col>
                </Row>
                <hr></hr>
            {mesas.length > 0 ? 
                (<Row className='mt-5'>
                    {mesas.map( (mesa) => {
                        return (
                            <Col key={mesa.id}  className='mt-5'>
                                <MesaCard mesat={mesa} className='mt-5'/>
                            </Col>
                        );
                    })}
                </Row>)
                : 
                (<div>......</div>)
            }
        {credentialsRdx.credentials.id_rol === 2 ? (
        <>
        <hr></hr>
                <Row>
                    <Col className='colMesa'>
                    <h1><strong>¡¡Reserva la mesa que mas se ajuste a tus necesidades!!</strong></h1>
                    <Row>
                    <Button className='buttonMesa' as={Link} to='/reserva'>Reservar</Button>
                    </Row>
                    </Col>
                </Row>
        <hr></hr>
        </>
        ) : credentialsRdx.credentials.id_rol === 1 ? (
            <>
            <hr></hr>
                    <Row>
                        <Col className='colMesa'>
                        <h1><strong>¡¡Reserva la mesa que mas se ajuste a tus necesidades!!</strong></h1>
                        <Row>
                        <Button className='buttonMesa' as={Link} to='/reserva'>Reservar</Button>
                        </Row>
                        </Col>
                    </Row>
            <hr></hr>
            </>
        ) : (
            <>
        <hr></hr>
                <Row>
                    <Col className='colMesa'>
                    <h1><strong>Para poder reservar una mesa de trabajo debes registrarte!</strong></h1>
                    <Row>
                    <Button className='buttonMesa' as={Link} to='/login'>Soy Miembro</Button>
                    <Button className='buttonMesa'as={Link} to='/registro' >Quiero unirme</Button>
                    </Row>
                    </Col>
                </Row>
        <hr></hr>
        </>
        )}
            </Container>

        </>
    )
}
