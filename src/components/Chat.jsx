import React from 'react';
import './style/chat.css';
import ZoomVideo from '@zoom/videosdk';
import tutorImage from '../assets/tutor.png';

const Chat = () => {
  React.useEffect(() => {
    // Initialize Zoom client
    const client = ZoomVideo.createClient();

    client.init({
      lang: 'en-US',
      leaveUrl: 'Global', // Replace with your leave URL
      patchJsMedia: true,
    });

    // Example usage
    const topic = 'Tutoring Session';
    const token = 'Your JWT token or Zoom access token';
    const userName = 'User Name';
    const password = 'Meeting password';

    joinMeeting(client, topic, token, userName, password)
      .then(() => {
        // Once joined, handle UI updates or proceed with session management
        console.log('Joined meeting successfully');
      })
      .catch((error) => {
        console.error('Failed to join meeting:', error);
      });

    // Function to join a meeting
    function joinMeeting(client, topic, token, userName, password) {
      return client.join(topic, token, userName, password);
    }
  }, []);

  return (
    <div id="chat">
      <div className="container">
        <div className="image">
          <h1>Set-up and join study sessions</h1>
          <img src={tutorImage} alt="a student having an online session" />
        </div>
        <div className="buttons">
          <div id="cb">
            <a href="C:\\Users\\tracy\\OneDrive\\Desktop\\Tutorspot\\meeting.html">
              <button className="btn btn-primary">Create</button>
            </a>
          </div>
          <div id="join">
            <button className="btn btn-primary">Join</button>
          </div>
          <div id="dash">
            <button className="btn btn-outline-light">Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
