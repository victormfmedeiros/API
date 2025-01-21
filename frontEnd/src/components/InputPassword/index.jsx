import React from 'react';
import Form from 'react-bootstrap/Form';

function InputPassword() {
  return (
    <>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="inputPassword5">Senha:</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      </Form.Group>
    </>
  );
}

export default InputPassword;