import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { userData } from '../layouts/userDetail/userSlice';




    function CardReserva ({appo})  {
        const credentialsRdx = useSelector(userData)
    
        return (
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{appo.date}</Card.Title>
                    <ul>
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
            </Card.Body>
            </Card>
            </>
        );
    }
        
    
        
    export default CardReserva;
