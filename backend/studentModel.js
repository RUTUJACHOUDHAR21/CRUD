const pool = require('./db');

const getAllStudents = async () => {
  const result = await pool.query('SELECT * FROM students ORDER BY id ASC');
  return result.rows;
};

const addStudent = async (name, email) => {
  await pool.query('INSERT INTO students (name, email) VALUES ($1, $2)', [name, email]);
};

const deleteStudent = async (id) => {
  await pool.query('DELETE FROM students WHERE id = $1', [id]);
};

module.exports = { getAllStudents, addStudent, deleteStudent };
