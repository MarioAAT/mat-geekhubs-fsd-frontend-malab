import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row  } from 'react-bootstrap';
import { MesaCard } from '../../components/MesaCard';
import { GetAllMesas } from '../../services/apiCalls';

export const MesasTrabajo = () => {

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
    console.log(mesas)

    return (
        <>
            <Container className='contCardReservas'>
                <Row>
                <Col><h1>Mesas de Trabajo</h1></Col>
                </Row>
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
            </Container>
        </>
    )
}
