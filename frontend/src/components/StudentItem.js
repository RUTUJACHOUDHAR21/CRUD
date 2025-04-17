import React from 'react';

const StudentItem = ({ student, onDelete }) => (
  <div>
    <strong>{student.name}</strong> — {student.email}
    <button onClick={() => onDelete(student.id)}>Delete</button>
  </div>
);

export default StudentItem;
