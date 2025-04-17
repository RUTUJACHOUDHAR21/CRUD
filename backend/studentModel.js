const db = require('./db');

const getAllStudents = () => db.query('SELECT * FROM students ORDER BY id ASC');
const getStudentById = (id) => db.query('SELECT * FROM students WHERE id = $1', [id]);
const createStudent = (name, email) => db.query('INSERT INTO students (name, email) VALUES ($1, $2)', [name, email]);
const updateStudent = (id, name, email) => db.query('UPDATE students SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
const deleteStudent = (id) => db.query('DELETE FROM students WHERE id = $1', [id]);

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };
