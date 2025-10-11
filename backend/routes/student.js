// backend/routes/student.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST /api/students - Add new student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/students - Get all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
