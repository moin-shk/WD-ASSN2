'use client';
import { useState } from 'react';

export default function StudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: ensure all fields are filled
    if (!firstName || !lastName || !dob || !grade) {
      setError('All fields are required.');
      return;
    }
    // Create a new student object
    const newStudent = {
      id: Date.now(), // simple unique ID based on timestamp
      firstName,
      lastName,
      dob,
      grade
    };
    onAddStudent(newStudent);
    // Clear the form and error message
    setFirstName('');
    setLastName('');
    setDob('');
    setGrade('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <h2>Add New Student</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginBottom: '0.5rem' }}>
        <label>First Name: </label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
          required 
        />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>Last Name: </label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
          required 
        />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>Date of Birth: </label>
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)}
          required 
        />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>Grade: </label>
        <input 
          type="number" 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)}
          required 
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
}
