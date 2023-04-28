import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../layouts/userDetail/userSlice';

export const NavBar = () => {

    const credentialsRdx = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () => {
    localStorage.setItem("token", JSON.stringify(null));
        dispatch(userout({ credentials: {}, token: ''}));
        return navigate("/");
    }

    console.log(credentialsRdx)
    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to={'/'}>MALAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {credentialsRdx.credentials.id_rol === 2 ? (
                    <>
                    <Nav.Link href="#home">Coworking</Nav.Link>
                    <Nav.Link href="#link">Mesas</Nav.Link>
                    <Nav.Link href="#link">Tarifas</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <Nav.Link href="#link">Reservar</Nav.Link>
                    <NavDropdown title="Mi espacio" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mis reservas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/logout' onClick={() => logout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </>
                ) : credentialsRdx.credentials.id_rol === 1 ? (
                    <>
                    <Nav.Link href="#home">Coworking</Nav.Link>
                    <Nav.Link href="#link">Mesas</Nav.Link>
                    <Nav.Link href="#link">Tarifas</Nav.Link>
                    <Nav.Link href="#link">Cursos</Nav.Link>
                    <Nav.Link href="#link">Reservar</Nav.Link>
                    <NavDropdown title="Familia MALAB" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Usuarios</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Reservas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/logout' onClick={() => logout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </>
                ) : (
                    <>
                    <Nav.Link href="#home">Coworking</Nav.Link>
                    <Nav.Link href="#link">Mesas</Nav.Link>
                    <Nav.Link href="#link">Tarifas</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Únete a la Familia" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/login'>Soy miembro</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/registro'>Quiero unirme</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Quiero visitar MALAB</NavDropdown.Item>
                    </NavDropdown>
                    </>
                )}                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}
