import React from "react";
import styled from "@emotion/styled";

import Helmet from "react-helmet";
import Layout from "../components/layout";
import Title from "../components/title";

import {Form, Button} from "react-bootstrap";

const MarginContainer = styled("div")`
    max-width: 700px;
    margin: 0 auto;
`

const ContentContainer = styled("div")`
    padding: 0px 50px;
`

export default function Contact(){
    return (
        <Layout>
            <Helmet>
                <title>Contact | TMK Photos</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>
            
            <MarginContainer>
                <ContentContainer>
                    <Title top="Contact Me" bottom="Have any questions or concerns? Contact me directly with the form below"/>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.Subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter your message subject here"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your message here" rows={10} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ContentContainer>
            </MarginContainer>
        </Layout>
    );
}