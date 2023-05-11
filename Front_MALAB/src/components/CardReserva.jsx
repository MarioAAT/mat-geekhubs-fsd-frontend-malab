import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../layouts/userDetail/userSlice';
import { addChoosenReserva } from '../layouts/userDetail/reservaSlice';
import { useNavigate } from 'react-router-dom';
import { borrarReserva } from '../services/apiCalls';
import '../components/StyleCardReserva.css'


    function CardReserva ({appo, reload})  {
        const credentialsRdx = useSelector(userData)
        const navigate = useNavigate();
        const token = credentialsRdx.credentials.token 
        const dispatch = useDispatch()
        
        const selected = (reserva) => {
            dispatch(addChoosenReserva({ choosenReserva: reserva}))
            console.log(reserva)
            setTimeout(() => {
                navigate('/editarreserva');
            }, 500);
        }

        const select = (reserva) => {
            dispatch(addChoosenReserva({ choosenReserva: reserva}))
            console.log(reserva)
            setTimeout(() => {
                navigate('/usuarioeditreserva');
            }, 500);
        }

        const cancelarReserva = async () =>{
            borrarReserva(appo.id, token)
            setTimeout(() => {
                reload();
            }, 500);
        }
    
        return (
            <>
            <Card style={{ width: '18rem' }} className='reserva-card'>
            <Card.Body>
                <Card.Title className='reserva-card__date '>Detalles</Card.Title>
                    {credentialsRdx.credentials.id_rol === 1? (
                        <>
                    <ul className='reserva-card__list'>
                        <li><li>Fecha:</li>{appo.fecha_reserva}</li>
                        <li><li>Hora de inicio:</li>{appo.hora_inicio}</li>
                        <li><li>Hora de fin:</li>{appo.hora_fin}</li>
                        <li><li>Usuario:</li>{appo.Usuario.nombre}</li>
                        <li><li>Mesa:</li>{appo.Mesas_de_trabajo.nombre}</li>
                    </ul>
                    <Button variant="primary" className="appointment-card__button" onClick={()=>selected(appo)} >Editar</Button>
                        </>
                        ) : (
                        <>
                    <ul className='reserva-card__list'>
                        <li><li>Fecha:</li>{appo.fecha_reserva}</li>
                        <li><li>Hora de inicio:</li>{appo.hora_inicio}</li>
                        <li><li>Hora de fin:</li>{appo.hora_fin}</li>
                        <li><li>Mesa:</li>{appo.Mesas_de_trabajo.nombre}</li>
                    </ul>
                    <Button variant="primary" className="appointment-card__button" onClick={()=>select(appo)} >Editar</Button>
                        </>
                        )}
                    <Button variant="primary" className="appointment-card__button" onClick={cancelarReserva } >Borrar</Button>
            </Card.Body>
            </Card>
            </>
        );
    }
        
    
        
    export default CardReserva;
