'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import Footer from '../components/Footer';
import initialStudents from '../data/students.json';

export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  interface Student {
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    grade: string;
  }
  
  const handleAddStudent = (student: Student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };
  

  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <StudentList students={students} />
        <StudentForm onAddStudent={handleAddStudent} />
      </main>
      <Footer />
    </div>
  );
}
