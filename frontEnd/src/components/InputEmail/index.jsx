import Form from 'react-bootstrap/Form';
import React from 'react';

function InputEmail() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    </Form>
  );
}

export default InputEmail;