import React from 'react';
import NavBar from './NavBar';
import { Card, Button, Spacer } from '@nextui-org/react';

const StudentDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <NavBar />
      <main className="flex-1 p-6">
        
          <Card shadow="sm" className="mb-6 p-6 bg-white">
            <p h1 size={30} weight="bold" className="mb-4">
              Welcome to Your Dashboard
            </p>
            <p>
              Select a section from the navigation menu.
            </p>
          </Card>
          <Card shadow="sm" className="p-6 bg-white">
            <p h2 size={24} weight="medium" className="mb-4">
              Quick Actions
            </p>
            <div className="flex space-x-4">
              <Button auto flat color="primary" className="w-full">
                View Courses
              </Button>
              <Button auto flat color="secondary" className="w-full">
                Manage Profile
              </Button>
            </div>
          </Card>
        
      </main>
    </div>
  );
};

export default StudentDashboard;
