import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import {  login } from '../userDetail/userSlice';
import { logMe } from '../../services/apiCalls';
import { InputText } from '../../components/InputText';
import { Container, Form, Button } from 'react-bootstrap';
// import { validate } from '../../helpers/useFul';
import './Login.css'
import { NavBar } from '../../components/NavBar';


export const Login = () => {

//     const dispatch = useDispatch();
//     const credentialsRdx = useSelector(userData);

//     const navigate = useNavigate();
//     const [welcome, setwelcome] = useState("");

//     const [credenciales, setcredenciales] = useState({
//         email: "",
//         password: ""
//     })
//     console.log(credenciales)

//     const inputHandler = (e) => {
//         setcredenciales((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const [credencialesError, setCredencialesError] = useState({
//         emailError: "",
//         passwordError: ""
//     });

//     const [valiCredenciales, setValiCredenciales] = useState({
//         emailVali: false,
//         passwordVali: false,
//     })

//     console.log(valiCredenciales);

//     const [loginAct, setLoginAct] = useState(false);

//     useEffect(() => {
//         for(let error in credencialesError){
//             if(credencialesError[error] !== ""){
//                 setLoginAct(false);
//                 return;
//             }
//         }

//         for(let vacio in credenciales){
//             if(credenciales[vacio] === ""){
//                 setLoginAct(false);
//                 return;
//             }
//         }

//         for(let validation in valiCredenciales){
//             if(valiCredenciales[validation] === false){
//                 setLoginAct(false);
//                 return;
//             }
//             console.log(validation);
//         }

//         setLoginAct(true);
//     });

//     const checkError = (e) => {
//         let error = "";

//         let checked = validate(
//             e.target.name,
//             e.target.value,
//             e.target.required
//         );

//         error = checked.message;

//         setValiCredenciales((prevState) => ({
//             ...prevState,
//             [e.target.name + "Vali"]: checked.validated,
//         }));

//         setCredencialesError((prevState) => ({
//             ...prevState,
//             [e.target.name + "Error"]: error,
//         }));
//     };

// const logeame = () => {

//     logMe(credenciales)
//     .then((respuesta) => {
//         const { data } = respuesta
//         const decodedToken = decodeToken(data.token)
//         let datosBackend = {
//             id_usuario: decodedToken.id,
//             id_rol: decodedToken.id_rol,
//             token: data.token
//         };
//         dispatch(login({ credentials: datosBackend}));
//         setwelcome(`Bienvenidx de nuevo ${datosBackend.usuario}`);
//         setTimeout(() => {
//             navigate("/");
//         }, 500);
// console.log(datosBackend);

//     })
//     .catch ((error) => console.log(error));
// };

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
            console.log(respuesta)    
            dispatch(login({credentials: datosBackend}));
            setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario}`);
    setTimeout(() => {
        navigate("/");
        }, 3000);
        console.log(respuesta);
        console.log(datosBackend);
    })
    .catch(error => console.log(error))
};

    return (
        <>
        <Container className='loginform'>
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
