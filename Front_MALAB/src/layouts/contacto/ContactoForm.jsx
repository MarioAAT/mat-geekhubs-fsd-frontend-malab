import React from 'react'
import { Form, Button, Container, Row } from "react-bootstrap";
import { InputText } from '../../components/InputText';

export const ContactoForm = () => {
    return (
        <>
        <Container className='loginform divPrincipal'>
            <Row><h1>Contactanos</h1></Row>
        <Form >
        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <InputText/>
        </Form.Group>

        <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <InputText/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
        </>
    )
}
