'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import initialStudents from '../data/students.json';

export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    const newStudent = { id: students.length + 1, ...student };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <StudentList students={students} />
        <StudentForm onAddStudent={addStudent} />
      </main>
      <Footer />
    </div>
  );
}
