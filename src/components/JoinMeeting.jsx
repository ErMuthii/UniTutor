import React, { useState } from 'react';
import './style/JoinMeeting.css';

const JoinMeeting = () => {
  const [roomID, setRoomID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can redirect to the meeting page with the roomID as a query parameter
    window.location.href = `/meeting?roomID=${roomID}`;
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Join Meeting</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <input
            type="text"
            placeholder="Room ID:"
            className="form-control"
            id="roomID"
            name="roomID"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Join</button>
      </form>
    </div>
  );
};

export default JoinMeeting;
