import React, {useState} from "react";
import styled from "@emotion/styled";

import Helmet from "react-helmet";
import Layout from "../components/layout";
import Title from "../components/title";

import emailjs from "emailjs-com";

import {Form, Button, Alert} from "react-bootstrap";

const MarginContainer = styled("div")`
    max-width: 700px;
    margin: 0 auto;
`

const ContentContainer = styled("div")`
    padding: 100px 50px;

    @media (max-width: 900px){
        padding: 150px 50px;
    }
`

function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm(process.env.EMAIL_SERVICE, process.env.EMAIL_TEMPLATE, e.target, process.env.EMAIL_USER)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
}

export default function Contact(){
    const [clicked, setClicked] = useState(false);

    return (
        <Layout>
            <Helmet>
                <title>Contact | TMK Groups</title>
                <body style="font-family: catamaran"></body>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>
            
            <MarginContainer>
                <ContentContainer>
                    <Title top="Contact Me" bottom="Have any questions or concerns? Contact me directly with the form below"/>
                    {clicked && <Alert key="success" variant="success">Message sent!</Alert>}
                    <Form onSubmit={sendEmail}>
                        <Form.Group controlId="contactForm.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" name="email"/>
                        </Form.Group>
                        <Form.Group controlId="contactForm.Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Your Name" name="from_name"/>
                        </Form.Group>
                        <Form.Group controlId="contactForm.Subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your message subject here" name="subject"/>
                        </Form.Group>
                        <Form.Group controlId="contactForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as="textarea" placeholder="Enter your message here" rows={10} name="message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => setClicked(true)}>
                            Submit
                        </Button>
                    </Form>
                </ContentContainer>
            </MarginContainer>
        </Layout>
    );
}