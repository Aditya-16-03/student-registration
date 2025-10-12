// frontend/src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/students')
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading students...</p>
      </Container>
    );

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Registered Students</h2>
      <Row xs={1} md={3} className="g-4">
        {students.length === 0 && (
          <p className="text-center">No students registered yet.</p>
        )}
        {students.map((student) => (
          <Col key={student._id}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {student.course}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Email:</strong> {student.email} <br />
                  <strong>Enrollment No:</strong> {student.enrollment} <br />
                  <strong>Address:</strong> {student.address || 'N/A'} <br />
                  <strong>Phone:</strong> {student.phone || 'N/A'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentList;
