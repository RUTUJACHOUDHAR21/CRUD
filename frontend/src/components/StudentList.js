import React, { useEffect, useState } from 'react';
import StudentItem from './StudentItem';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch('https://your-backend-url.onrender.com/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => { fetchStudents(); }, []);

  const addStudent = async (student) => {
    await fetch('https://your-backend-url.onrender.com/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`https://your-backend-url.onrender.com/api/students/${id}`, {
      method: 'DELETE'
    });
    fetchStudents();
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <StudentForm onAdd={addStudent} />
      {students.map((s) => (
        <StudentItem key={s.id} student={s} onDelete={deleteStudent} />
      ))}
    </div>
  );
};

export default StudentList;
