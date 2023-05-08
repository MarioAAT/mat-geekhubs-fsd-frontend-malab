import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/InputText';
import { reservaData } from '../userDetail/reservaSlice';
import { editReserva } from '../../services/apiCalls';
import { userData } from '../userDetail/userSlice';


export const EditarReserva = () => {

    const ReduxCredentials = useSelector(userData);
    const ReduxReserva = useSelector(reservaData);
    const [welcome, setWelcome] = useState("");
    const navigate = useNavigate();
    console.log(ReduxReserva, "------------")
    let params = ReduxReserva.choosenReserva.id

    const [mesas, setMesas] = useState([
        {
            id: 1,
            nombre: "Biehne"
        },
        {
            id: 2,
            nombre: "Eandrade"
        },
        {
            id: 3,
            nombre: "Hun Chung"
        },
        {
            id: 4,
            nombre: "Baranga"
        },
        {
            id: 5,
            nombre: "MacDowell"
        },
        {
            id: 6,
            nombre: "Cofán"
        },
        
    ]);

    const [reserva, setReserva] = useState({
        id: params,
        fecha_reserva: '',
        hora_inicio:'',
        hora_fin: '',
        id_usuario: ReduxCredentials.credentials.id,
        id_mesa: '',
    });

    const inputHandler = (e) => {
        setReserva((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const checkError = (e) => { }

    const updateReserva = () => {
        editReserva(params, reserva, ReduxCredentials.credentials. token)
        .then((resultado) => {
            setReserva(resultado.data)
            setWelcome(`Reserva modificada para el día ${reserva.fecha_reserva}`);
            setTimeout(() => {
                navigate('/');
            }, 1500);
        })
        .catch(error => {
            setReserva(error.message);
        });
    }
    console.log(reserva, 'ljdfhlghdflgjhfdjg')

    return (
        <>
        <div>
            <div className="loginDesign">
                {welcome !== "" ? (
            <div>{welcome}</div>
        ) : (
            <div>
                <Container>
                    <Row className="LoginForm2">
                        <Col lg={6}>
                            <Form className='formAppointments' style={{ width: "20rem" }}>
                                <Form.Select 
                                name={"service_id"} 
                                onChange={(e) => inputHandler(e)} 
                                aria-label="Default select example">
                                <option>Mesa de trabajo:</option>
                                    {mesas.map((mesa) => {
                                        return (
                                            <option key={mesa.id} value={mesa.id}>{mesa.servicio}</option>
                                        )
                                    })}
                                </Form.Select>
                                <Form.Select name={"payment"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose Default payment:</option>
                                    <option value="1">Cash</option>
                                    <option value="2">Card</option>
                                </Form.Select>
                                <p></p>
                                <Form.Group>
                                    <Form.Label>Date:</Form.Label>
                                    <InputText className={"date"}
                                                    type={"datetime-local"} name={"date"} placeholder={"date"} required={true}
                                                    changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                                </Form.Group>
                                <p></p>
                                <div className='botonModificar'>
                                    <Button variant="primary" onClick={updateReserva}>
                                        Guardar cambios
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            )}
            </div>
        </div>
        </>
    )
}
