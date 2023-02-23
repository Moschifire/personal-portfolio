import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

  return (
    <section className="contact" id="contact">
        <Container>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    </section>
  )
}

export { Contact };