const express = require('express');
const { getAllStudents, addStudent, deleteStudent } = require('./studentModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    await addStudent(name, email);
    res.status(201).json({ message: 'Student added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteStudent(id);
    res.status(200).json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

module.exports = router;
