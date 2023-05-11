import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import './CoworkingPage.css'
import mesa from '../../images/mesa3.jpg'

export const CoworkingPage = () => {
    return (
        <>
        <Container className='contCowo'>
            <Row><h1>¿Por qué un Coworking?</h1></Row>
            <Container className='mt-3'>
                <hr />
            <Row className="colClass">
            <Col lg={6} >
                <h3>
                Existe mucha demanda de espacios creativos porque resulta difícil desarrollar
                actividades de cerámica en casa y el precio elevado de los alquileres dificulta la puesta
                en marcha de los emprendedores que quieren comenzar abriendo su propio taller. Es
                por esta razón que se considera viable ofrecer un espacio de trabajo a cambio de un
                módico precio.
                </h3>
            </Col>
            <Col lg={6} className="colDos">
                <Image src={mesa} className='img-fluid'/>
            </Col>
            </Row>
            <hr />
            <Row>
                <h3>
                En este laboratorio existirán espacios para crear, investigar, aprender, compartir,
                experimentar con la cerámica y los esmaltes. Las instalaciones contarán con toda la
                equipación necesaria para poder ejecutar las actividades así como áreas específicas. La
                propuesta de este proyecto es por un lado presentar cursos especializados dirigidos a
                profesionales del sector de la cerámica y por otro ofrecer las instalaciones y los
                servicios para toda persona o grupo que las necesite por un módico precio. Esto se
                traduce en presentar una programación trimestral o semestral de los talleres que se
                van a ofertar y el tiempo restante disponer para los profesionales de un espacio donde
                desarrollar sus proyectos cerámicos. El lugar destinado a este proyecto es el bajo de la
                calle fontanares propiedad de PRODESCO S.L.
                </h3>
            </Row>
            <hr />
        </Container>
        </Container>
        </>
    )
}
