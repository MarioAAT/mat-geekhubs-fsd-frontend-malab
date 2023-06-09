import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/InputText';
import { editPerfil } from '../../services/apiCalls';
import { userData } from '../userDetail/userSlice';
import { Container, Form, Button } from 'react-bootstrap';

export const EditarPerfil = () => {

    const ReduxCredentials = useSelector(userData);
    const [welcome, SetWelcome] = useState("");
    const ID = ReduxCredentials.credentials.id
    const navigate = useNavigate();

    const [putPerfil, setputPerfil] = useState({
        id: ID,
        nombre: "",
        apellido: "",
        telefono: "",
        password: "",
    })



    const inputHandler = (e) => {
        setputPerfil((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        })) ;
    };

    const checkError = (e) => {}

    const putUsuarioPerfil = () => {
        editPerfil(putPerfil, ReduxCredentials.credentials.token)
        .then((resultado) => {
            setputPerfil(resultado.data)
            SetWelcome('Perfil modificado correctamente');
            setTimeout(() => {
                navigate('/perfil');
            }, 1500);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
        <Container className='loginform'>
        <div><h1>Edit Profile</h1></div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <InputText 
                type={'text'}
                name={'nombre'}
                placeholder={'Nombre....'}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <InputText 
                type={'text'}
                name={'apellido'}
                placeholder={'Apellido...'}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Teléfono</Form.Label>
            <InputText 
                type={'text'}
                name={'telefono'}
                placeholder={'Teléfono...'}
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
            variant="primary" onClick={putUsuarioPerfil}
            >Submit
            </Button>
        </Form>
        </Container>
        </>
    )
}
