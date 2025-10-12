import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { PersonFill, EnvelopeFill, LockFill } from 'react-bootstrap-icons';

const RegisterForm = ({ onSwitch }) => (
  <Form>
    <Form.Group className="mb-3 position-relative">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Full Name" />
      <PersonFill className="position-absolute"
        style={{
          top: '38px',
          left: '15px',
          pointerEvents: 'none',
          color: '#6c757d',
          fontSize: '1.2rem'
        }} />
    </Form.Group>

    <Form.Group className="mb-3 position-relative">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" />
      <EnvelopeFill className="position-absolute"
        style={{
          top: '38px',
          left: '15px',
          pointerEvents: 'none',
          color: '#6c757d',
          fontSize: '1.2rem'
        }} />
    </Form.Group>

    <Form.Group className="mb-3 position-relative">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Username" />
      <PersonFill className="position-absolute"
        style={{
          top: '38px',
          left: '15px',
          pointerEvents: 'none',
          color: '#6c757d',
          fontSize: '1.2rem'
        }} />
    </Form.Group>

    <Form.Group className="mb-3 position-relative">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      <LockFill className="position-absolute"
        style={{
          top: '38px',
          left: '15px',
          pointerEvents: 'none',
          color: '#6c757d',
          fontSize: '1.2rem'
        }} />
    </Form.Group>

    <Form.Group className="mb-3 position-relative">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
      <LockFill className="position-absolute"
        style={{
          top: '38px',
          left: '15px',
          pointerEvents: 'none',
          color: '#6c757d',
          fontSize: '1.2rem'
        }} />
    </Form.Group>

    <Button type="submit" className="w-100 btn-gradient fw-bold">
      Register
    </Button>

    <div className="mt-3 text-center">
      <a href="#!" onClick={onSwitch} className="small text-primary text-decoration-none" role="button" tabIndex={0}>
        Back to Login
      </a>
    </div>
  </Form>
);

export default RegisterForm;
