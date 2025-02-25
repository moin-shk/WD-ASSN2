'use client';
import { useState } from 'react';

export default function StudentForm({ onAddStudent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const toggleForm = () => setIsOpen(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !dob || !grade) {
      setError('All fields are required.');
      return;
    }
    const gradeNum = parseInt(grade, 10);
    if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 12) {
      setError('Grade must be a number between 1 and 12.');
      return;
    }
    const dobDate = new Date(dob);
    if (dobDate > new Date() || isNaN(dobDate.getTime())) {
      setError('Please enter a valid date of birth.');
      return;
    }
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      setError('Names should contain only letters.');
      return;
    }
    const newStudent = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dob,
      grade: gradeNum.toString()
    };
    onAddStudent(newStudent);
    setFirstName('');
    setLastName('');
    setDob('');
    setGrade('');
    setError('');
    setIsOpen(false);
  };

  return (
    <div style={{ margin: '2rem auto', maxWidth: '400px' }}>
      <button onClick={toggleForm} style={{
        backgroundColor: '#4caf50',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        width: '100%'
      }}>
        {isOpen ? 'Hide Form' : 'Add New Student'}
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit} style={{
          marginTop: '1rem',
          padding: '2rem',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            marginBottom: '1.5rem',
            fontSize: '1.75rem',
            color: '#333'
          }}>Add New Student</h2>
          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#555'
            }}>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#555'
            }}>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#555'
            }}>Date of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#555'
            }}>Grade:</label>
            <input
              type="number"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <button type="submit" style={{
            backgroundColor: '#4caf50',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            width: '100%'
          }}>Submit</button>
        </form>
      )}
    </div>
  );
}
