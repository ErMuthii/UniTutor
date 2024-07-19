import React from 'react';
import NavBar from './NavBar';

const StudentDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p>Select a section from the navigation menu.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
