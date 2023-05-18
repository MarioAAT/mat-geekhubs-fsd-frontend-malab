import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/InputText';
import { userData } from '../userDetail/userSlice';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { nuevaReserva } from '../../services/apiCalls';


export const Reservas = () => {

    const navigate = useNavigate();
    const [welcome, setWelcome] = useState("");
    const ReduxCredentials = useSelector(userData);

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
        
    ])

    const [reserva, setReserva] = useState({
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

    const registroReserva = () => {
        nuevaReserva(reserva, ReduxCredentials.credentials.token)
        .then( (resultado) => {
            setReserva(resultado.data)
            setWelcome(`Reserva realizada correctamente para el día: ${reserva.fecha_reserva}`);
            setTimeout(() => {
                navigate('/');
            },2500);
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
                <div className='welcomeDiv'>{welcome}</div>
            ) : (
        <div className="divPrincipal">
            <Container className='registerForm'>
                <h1>Reservar</h1>
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
                    onClick={registroReserva}
                    >
                    Reservar
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
