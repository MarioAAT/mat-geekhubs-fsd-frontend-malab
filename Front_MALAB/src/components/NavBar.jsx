import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../layouts/userDetail/userSlice';
import { Col, Image } from 'react-bootstrap';
import logoMalab from '../images/logoMalab.png'
import './NavBar.css'

export const NavBar = () => {

    const credentialsRdx = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () => {
    localStorage.setItem("token", JSON.stringify(null));
        dispatch(userout({ credentials: {}, token: ''}));
        return navigate("/");
    }

    return (
        <>
        <Navbar bg="light" expand="lg" className='fixed-top'>
        <Container>
            <Navbar.Brand as={Link} to={'/'}>
                <Image src={logoMalab} className='image-fluid custom-col'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Col className=''>
            <Nav className="me-auto d-flex justify-content-end">
                {credentialsRdx.credentials.id_rol === 2 ? (
                    <>
                    <Nav.Link as={Link} to='/coworking'>Coworking</Nav.Link>
                    <Nav.Link as={Link} to='/mesastrabajo'>Mesas</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <Nav.Link as={Link} to='/reserva'>Reservar</Nav.Link>
                    <NavDropdown title="Mi espacio" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/perfil'>Mi perfil</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/misreservas'>Mis reservas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/logout' onClick={() => logout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </>
                ) : credentialsRdx.credentials.id_rol === 1 ? (
                    <>
                    <Nav.Link as={Link} to='/coworking'>Coworking</Nav.Link>
                    <Nav.Link as={Link} to='/mesastrabajo'>Mesas</Nav.Link>
                    <Nav.Link href="#link">Cursos</Nav.Link>
                    <Nav.Link as={Link} to='/reserva'>Reservar</Nav.Link>
                    <NavDropdown title="Familia MALAB" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/perfil'>Mi perfil</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/misreservas'>Mis Reservas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/allusuarios'>Usuarios</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/allreservas'>Reservas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/logout' onClick={() => logout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </>
                ) : (
                    <>
                    <Nav.Link as={Link} to='/coworking'>Coworking</Nav.Link>
                    <Nav.Link as={Link} to='/mesastrabajo'>Mesas</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Únete a la Familia" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/login'>Soy miembro</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/registro'>Quiero unirme</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Quiero visitar MALAB</NavDropdown.Item>
                    </NavDropdown>
                    </>
                )}                
            </Nav>
            </Col>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}
