import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa'
import logoMalab from '../images/logoMalab.png'
import prodesco from '../images/prodesco.jpg'


export const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5 mt-5">
        <Container>
            <Row>
            <Col md={3}>
                <h3>Contacto</h3>
                <p>Puedes contactarnos en:</p>
                <ul className="list-unstyled">
                <li>Email: malab@coworking.com</li>
                <li>Teléfono: +64 940 649 465</li>
                </ul>
            </Col>
            <Col md={3} >
            <Image src={logoMalab} className='custom-col' />
            </Col>
            <Col md={3}>
                <h3>Colaborador</h3>
                <Image src={prodesco} className='custom-col'/>
                {/* <ul className="list-unstyled">
                <li>Prodesco</li>
                </ul> */}
            </Col>
            <Col md={3}>
                <h3>Ubicación</h3>
                <p><FaMapMarkerAlt /> C. Fontanar, Valencia, Valencia</p>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col className="text-center">
                <img src="" alt="" height="50" />
            </Col>
            </Row>
        </Container>
        </footer>
    )
}
