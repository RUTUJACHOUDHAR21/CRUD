const express = require('express');
const router = express.Router();
const pool = require('./db');

// GET all students
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST a new student
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    await pool.query('INSERT INTO students (name, email) VALUES ($1, $2)', [name, email]);
    res.status(201).send('Student added');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// DELETE a student
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM students WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
