const express = require('express');
const router = express.Router();
const studentModel = require('./studentModel');

router.get('/', async (req, res) => {
  const { rows } = await studentModel.getAllStudents();
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  await studentModel.createStudent(name, email);
  res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  await studentModel.updateStudent(id, name, email);
  res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await studentModel.deleteStudent(id);
  res.sendStatus(204);
});

module.exports = router;
