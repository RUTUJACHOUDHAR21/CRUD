import React, { useEffect, useState } from 'react';
import StudentItem from './StudentItem';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // optional

  const fetchStudents = async () => {
    try {
      const res = await fetch('https://crud-iwds.onrender.com/api/students');
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    try {
      await fetch('https://crud-iwds.onrender.com/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      fetchStudents();
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`https://crud-iwds.onrender.com/api/students/${id}`, {
        method: 'DELETE'
      });
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Student Registration</h2>
      <StudentForm onAdd={addStudent} />
      {loading ? (
        <p>Loading students...</p>
      ) : students.length > 0 ? (
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
