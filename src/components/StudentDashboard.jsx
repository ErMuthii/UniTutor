import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from '@nextui-org/react';

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch student data from the backend
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/student');
        setStudent(response.data.student);
        setCourses(response.data.courses);
      } catch (error) {
        setError('Failed to fetch student data.');
      }
    };

    fetchStudentData();
  }, []);

  const handleLogout = () => {
    // Perform logout operation
    // Redirect to login page or clear the state
    setStudent(null);
    setCourses([]);
    // You can also clear any stored tokens or session data here
    window.location.href = '/login'; // Redirect to login page
  };

  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
  }

  if (!student) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl mb-6">Welcome, {student.name}</h1>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Card key={course.id} className="p-4">
              <h3 className="text-xl">{course.name}</h3>
              <p>{course.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <Button color="error" className="mt-8" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default StudentDashboard;
