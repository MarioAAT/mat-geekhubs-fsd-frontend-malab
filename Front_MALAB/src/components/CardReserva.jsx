import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../layouts/userDetail/userSlice';
import '../components/StyleCardReserva.css'




    function CardReserva ({appo})  {
        const credentialsRdx = useSelector(userData)
    
        return (
            <>
            <Card style={{ width: '18rem' }} className='reserva-card'>
            <Card.Body>
                <Card.Title className='reserva-card__date '>Detalles</Card.Title>
                    <ul className='reserva-card__list'>
                    {credentialsRdx.credentials.id_rol === 1? (
                        <>
                        <li><li>Fecha:</li>{appo.fecha_reserva}</li>
                        <li><li>Hora de inicio:</li>{appo.hora_inicio}</li>
                        <li><li>Hora de fin:</li>{appo.hora_fin}</li>
                        <li><li>Usuario:</li>{appo.id_usuario}</li>
                        <li><li>Mesa:</li>{appo.id_mesa}</li>
                        </>
                        ) : (
                        <>
                        <li><li>Fecha:</li>{appo.fecha_reserva}</li>
                        <li><li>Hora de inicio:</li>{appo.hora_inicio}</li>
                        <li><li>Hora de fin:</li>{appo.hora_fin}</li>
                        <li><li>Mesa:</li>{appo.id_mesa}</li>
                        </>
                        )}
                    </ul>
                    <Button variant="primary" className="appointment-card__button" href="/editar">Editar</Button>
            </Card.Body>
            </Card>
            </>
        );
    }
        
    
        
    export default CardReserva;
