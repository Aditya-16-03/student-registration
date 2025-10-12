import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { PersonFill, LockFill } from 'react-bootstrap-icons';

const LoginForm = ({ onSwitch }) => (
  <Form>
    <Form.Group className="mb-3 position-relative">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
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

    <Form.Group className="mb-3">
      <Form.Check type="checkbox" label="Remember Me" />
    </Form.Group>

    <Button type="submit" className="w-100 btn-gradient fw-bold">
      Login
    </Button>

    <div className="mt-3 text-center">
      <a href="#!" className="small text-decoration-none text-primary">
        Forgot Password?
      </a>
    </div>
    <div className="mt-2 text-center">
      <span className="small">
        Don't have an account?{' '}
        <a href="#!" onClick={onSwitch} className="text-primary text-decoration-none" role="button" tabIndex={0}>
          Register
        </a>
      </span>
    </div>
  </Form>
);

export default LoginForm;
