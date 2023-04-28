import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/InputText';
import { validate } from '../../helpers/useFul';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { nuevoUsuario } from '../../services/apiCalls';
// import { Prev } from 'react-bootstrap/esm/PageItem';


export const Register = () => {
    
    const navigate = useNavigate();
    const [welcome, setWelcome] = useState("");
    
    const [credenciales, setCredenciales] = useState({
        nombre: "",
        apellido: "",
        email: "", 
        telefono: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        nombreError: "",
        apellidoError: "",
        emailError: "", 
        telefonoError: "",
        passwordError: "",
    });

    const [valiUser, setValiUser] = useState({
        nombreVali: false,
        apellidoVali: false,
        emailVali: false, 
        telefonoVali: false,
        passwordVali: false,
    });

    const [registerAct, setRegisterAct] = useState(false);

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        console.log(credenciales);
        console.log(valiUser);
        for(let error in credencialesError) {
            if (credencialesError[error] !== "") {
                setRegisterAct(false);
                return;
            }
        }
        for(let vacio in credenciales) {
            if (credenciales[vacio] === "") {
                setRegisterAct(false);
                return;
            }
        }
        for(let validated in valiUser) {
            if (valiUser[validated] === false) {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });

    const checkError = (e) => {
        let error = "";
        const checked = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );
        error = checked.message;
        setValiUser((prevState) => ({
            ...prevState,
            [e.target.name + "Vali"]: checked.validated,
        }));
        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const registerUser = () => {
        nuevoUsuario(credenciales)
        .then(() => {
            setWelcome(`Registro Correcto ${credenciales.email}`);
            setTimeout(() => {
                navigate("/login");
            }, 2500);
        })
        .catch((error) => console.log(error));
    };


    return (
        <>
            <div className="divPrincipal">
                <div className="loginDesign">
                    {welcome !== "" ? (
                <div>{welcome}</div>
            ) : (
        <div className="divPrincipal">
            <Container>
            <Row className="registerForm">
                <Col lg={6}>
                <Form className="formRegister">
                    <Form.Group>
                    <Form.Label>Nombre:</Form.Label>
                    <InputText
                        className={
                        credencialesError.nombreError ===
                            ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                        type={"text"}
                        name={"nombre"}
                        maxLength={70}
                        placeholder={"NOMBRE"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    </Form.Group>
                    <div className="errorDiv">
                    {credencialesError.nombreError}
                    </div>
                    <Form.Group>
                    <Form.Label>Apellido:</Form.Label>
                    <InputText
                        className={
                        credencialesError.apellidoError ===
                            ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                        type={"text"}
                        name={"apellido"}
                        maxLength={70}
                        placeholder={"APELLIDO"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    </Form.Group>
                    <div className="errorDiv">
                    {credencialesError.apellidoError}
                    </div>
                    <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <InputText
                        className={
                        credencialesError.emailError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                        type={"email"}
                        name={"email"}
                        maxLength={50}
                        placeholder={"ejemplo@ejemplo.com"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    </Form.Group>
                    <div className="errorDiv">
                    {credencialesError.emailError}
                    </div>
                    <Form.Group>
                    <Form.Label>Teléfono:</Form.Label>
                    <InputText
                        className={
                        credencialesError.telefonoError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                        type={"text"}
                        name={"telefono"}
                        maxLength={50}
                        placeholder={"651....."}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    </Form.Group>
                    <div className="errorDiv">
                    {credencialesError.telefonoError}
                    </div>
                    <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <InputText
                        className={
                        credencialesError.passwordError ===
                            ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                        type={"password"}
                        name={"password"}
                        maxLength={64}
                        placeholder={"Password"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                    />
                    </Form.Group>
                    <div className="errorDiv">
                    {credencialesError.passwordError}
                    </div>
                    <br />
                    <Button
                    className={
                        registerAct
                        ? "registerSendDeac"
                        : "registerSendAct"
                    }
                    // variant="primary"
                    onClick={registerUser}
                    >
                    Registrar
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
