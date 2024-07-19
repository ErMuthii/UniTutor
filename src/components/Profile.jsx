import React from 'react';
import Calendar from './Calendar';
import Chat from './Chat';
import NavBar from './NavBar';
import {  Card, Spacer } from '@nextui-org/react';


const Profile = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <NavBar />
      <main className="flex flex-1 p-6 space-x-6">
        <div className="flex flex-col flex-1">
          <Card shadow="sm" className="mb-6 p-4">
            <h2 className="text-xl font-semibold">Calendar</h2>
            <Spacer y={1} />
            <Calendar />
          </Card>
          <Card shadow="sm" className="p-4">
            <h2 className="text-xl font-semibold">Chat</h2>
            <Spacer y={1} />
            <Chat />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
