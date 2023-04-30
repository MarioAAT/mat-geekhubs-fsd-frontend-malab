import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import servicios from '../images/servicios.jpg'
import './Seccion.css'

export const Seccion = () => {
    return (
        <section className='top-5'>
        <Container>
            <Row className="colClass">
            <Col lg={6} >
                <h2>Servicios</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nunc dictum nibh a felis maximus pretium. Integer sagittis, tortor ac gravida tristique, odio justo tincidunt arcu, vel ultrices velit velit vitae ipsum. Nulla facilisi. Sed at risus felis.</p>
            </Col>
            <Col lg={6} className="colDos">
                <img src={servicios} alt="imagen de ejemplo" />
            </Col>
            </Row>
        </Container>
        </section>
    )
}
