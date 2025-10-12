// frontend/src/components/RegistrationForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    enrollment: "",
    course: "",
    address: "",
    phone: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", form);
      setMessage("Student registered successfully!");
      setForm({
        name: "",
        email: "",
        enrollment: "",
        course: "",
        address: "",
        phone: ""
      });
    } catch (err) {
      setMessage(err.response.data.error || "Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="enrollment" value={form.enrollment} onChange={handleChange} placeholder="Enrollment Number" required />
      <input name="course" value={form.course} onChange={handleChange} placeholder="Course" required />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Register</button>
      <div>{message}</div>
    </form>
  );
};
export default RegistrationForm;
