import React from "react";
import './index.css';
import Form from 'react-bootstrap/Form'
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import Botaologin from "../../components/Botao";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
    return (
        <>
            <Container>
                <h1>Formulário de login:</h1>
                <Form>
                    <InputEmail />
                    <InputPassword />
                </Form>

                <Botaologin />
            </Container>
        </>
    );
}

export default Login;