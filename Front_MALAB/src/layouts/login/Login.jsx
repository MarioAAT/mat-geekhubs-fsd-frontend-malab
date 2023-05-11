import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import {  login } from '../userDetail/userSlice';
import { logMe } from '../../services/apiCalls';
import { InputText } from '../../components/InputText';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'

export const Login = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const [welcome, setWelcome] = useState("");

const [credenciales, setCredenciales] = useState({
email: '',
password: ''
})

const inputHandler = (e) => {
    setCredenciales((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
}

const checkError = (e) => {
}

const logeame = () => {
logMe(credenciales)
    .then( respuesta => {
        let decodificado = decodeToken(respuesta.data.token)
            let datosBackend = {
                token: respuesta.data.token,
                id: decodificado.usuarioId,
                id_rol: decodificado.rolId
            };       
            dispatch(login({credentials: datosBackend}));
            setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario}`);
    setTimeout(() => {
        navigate("/");
        }, 1500);
    })
    .catch(error => console.log(error))
};

    return (
        <>
        <Container className='loginform divPrincipal'>
        <h1>Login</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <InputText 
                    
                    type={'text'}
                    name={'email'}
                    placeholder={'Email...'}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputText 
                    
                    type={'password'}
                    name={'password'}
                    placeholder={'Password...'}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
            </Form.Group>
            <Button
                variant="primary"
                onClick= {() => logeame()}
                >Submit
            </Button>
            </Form>
        </Container>
        </>
    )
}
