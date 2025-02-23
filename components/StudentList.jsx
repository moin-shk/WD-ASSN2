'use client';

export default function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: '0.5rem' }}>
            {student.firstName} {student.lastName} | DOB: {student.dob} | Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
