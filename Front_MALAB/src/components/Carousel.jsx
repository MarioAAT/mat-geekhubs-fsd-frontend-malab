import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

export const Caroussel = () => {
    return (
        <>
        <Container className="carousel-wrapper">
            <Row>
                <Col className=''>
                <Carousel interval={5000} >
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/400x200.png?text=First+Slide"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/400x200.png?text=Second+Slide"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/400x200.png?text=Third+Slide"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center align-items-start">
                <h2>Servicios</h2>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nunc dictum nibh a felis maximus pretium. Integer sagittis, tortor ac gravida tristique, odio justo tincidunt arcu, vel ultrices velit velit vitae ipsum. Nulla facilisi. Sed at risus felis.</p>
            </Col>
            </Row>
        </Container>
        </>
    )
}
