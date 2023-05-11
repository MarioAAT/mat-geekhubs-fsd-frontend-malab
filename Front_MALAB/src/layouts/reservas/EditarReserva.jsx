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
    const ID = ReduxReserva.choosenReserva.id;
    const idUsuario = ReduxReserva.choosenReserva.id_usuario
    

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
        ID,
        fecha_reserva: '',
        hora_inicio:'',
        hora_fin: '',
        id_usuario: idUsuario,
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
        editReserva(ID, reserva, ReduxCredentials.credentials.token)
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
    

    return (
        <>
        <div className="divPrincipal">
                <div className="loginDesign">
                    {welcome !== "" ? (
                <div>{welcome}</div>
            ) : (
        <div className="divPrincipal">
            <Container className='registerForm'>
            <Row className="">
                <Col lg={6}>
                <Form className="formRegister">
                    <Form.Group>
                    <Form.Label>Fecha de reserva:</Form.Label>
                    <InputText
                        type={"date"}
                        name={"fecha_reserva"}
                        // maxLength={70}
                        placeholder={"Fecha"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    
                    <Form.Label>Hora de inicio:</Form.Label>
                    <InputText
                        type={"time"}
                        name={"hora_inicio"}
                        // maxLength={70}
                        placeholder={"Hora"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    <Form.Label>Hora de fin:</Form.Label>
                    <InputText
                        type={"time"}
                        name={"hora_fin"}
                        // maxLength={50}
                        placeholder={"hora"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    <Form.Label>Mesa de trabajo:</Form.Label>
                    <Form.Select 
                        name={"id_mesa"} 
                        onChange={(e) => inputHandler(e)} 
                        aria-label="Default select example">
                        <option>Elije mesa:</option>
                                {mesas.map((mesas) => {
                                    return (
                                        <option key={mesas.id} value={mesas.id}>{mesas.nombre}</option>
                                    )
                                })}
                    </Form.Select>
                    </Form.Group>
                    <br />
                    <Button
                    
                    // variant="primary"
                    onClick={updateReserva}
                    >
                    Guardar Cambios
                    </Button>
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
