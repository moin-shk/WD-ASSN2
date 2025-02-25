'use client';

export default function StudentList({ students }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <h2 style={{ marginBottom: '1rem', color: '#333', fontSize: '1.5rem' }}>Student List</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#4caf50', color: '#fff', textAlign: 'left' }}>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>First Name</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Last Name</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>DOB</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.firstName}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.lastName}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.dob}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
