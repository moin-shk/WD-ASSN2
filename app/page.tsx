'use client';
import { useState } from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import Footer from '../components/Footer';
import initialStudents from '../data/students.json';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  grade: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const handleAddStudent = (student: Student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '1rem' }}>
        <StudentList students={students} />
        <StudentForm onAddStudent={handleAddStudent} />
      </main>
      <Footer />
    </div>
  );
}
