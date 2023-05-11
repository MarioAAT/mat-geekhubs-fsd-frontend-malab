import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import mesa from '../images/mesa8.jpg'
import './Seccion.css'

export const DosSeccion = () => {
    return (
        <section className='top-5'>
        <Container>
            <Row className="colClass">
            <Col lg={6} className="colDos">
                <Image src={mesa} className='img-fluid' />
            </Col>
            <Col lg={6} >
                <h2>Servicios</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nunc dictum nibh a felis maximus pretium. Integer sagittis, tortor ac gravida tristique, odio justo tincidunt arcu, vel ultrices velit velit vitae ipsum. Nulla facilisi. Sed at risus felis.</p>
            </Col>
            </Row>
        </Container>
        </section>
    )
}
