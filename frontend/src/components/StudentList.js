import React, { useEffect, useState } from 'react';
import StudentItem from './StudentItem';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch('https://crud-iwds.onrender.com/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    await fetch('https://crud-iwds.onrender.com/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`https://crud-iwds.onrender.com/api/students/${id}`, {
      method: 'DELETE'
    });
    fetchStudents();
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <StudentForm onAdd={addStudent} />
      {students.length > 0 ? (
        students.map((student) => (
          <StudentItem key={student.id} student={student} onDelete={deleteStudent} />
        ))
      ) : (
        <p>No students registered yet.</p>
      )}
    </div>
  );
};

export default StudentList;
