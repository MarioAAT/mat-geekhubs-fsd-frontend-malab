import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import  chicataza  from '../images/chicataza.jpg';
import estantes from '../images/estantes.jpg';
import tornocorazon from '../images/tornocorazon.jpg';

export const Caroussel = () => {
    return (
        <>
        <Container className="carousel-wrapper mt-5">
            <Row>
                <Col className=''>
                <Carousel interval={5000} >
                    <Carousel.Item>
                        <Image src={chicataza} className='img-fluid'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={estantes} className='img-fluid'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={tornocorazon} className='img-fluid'/>
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center align-items-start">
                <h2>MALAB</h2>
                <p className=''>Con el fin de crear comunidad y expandir los conocimientos de la cerámica nace la propuesta 
                                MALAB CERAMIC SURFACE LABORATORY BY PRODESCO. Un espacio donde dar rienda suelta a la 
                                creatividad a través de la experimentación con materiales cerámicos.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}
