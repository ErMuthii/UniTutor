import React, { useState, useEffect } from 'react';
import './style/calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Initialize the calendar or perform other side effects here
  }, []);

  const addEvent = () => {
    const eventDate = document.getElementById('eventDate').value;
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDescription = document.getElementById('eventDescription').value;

    const newEvent = { id: events.length + 1, date: eventDate, title: eventTitle, description: eventDescription };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const previous = () => {
    // Logic for navigating to the previous month
  };

  const next = () => {
    // Logic for navigating to the next month
  };

  const jump = () => {
    // Logic for jumping to a specific month and year
  };

  return (
    <div className="Calframe">
      <h1>CALENDAR</h1>
      <h2>Find all your scheduled classes here!</h2>
      <div className="container-calendar">
        <div id="left">
          <div id="event-section">
            <h3>Add Event</h3>
            <input type="date" id="eventDate" />
            <input type="text" id="eventTitle" placeholder="Event Title" />
            <input type="text" id="eventDescription" placeholder="Event Description" />
            <button id="addEvent" onClick={addEvent}>Add</button>
          </div>
          <div id="reminder-section">
            <h3>Reminders</h3>
            <ul id="reminderList">
              {events.map(event => (
                <li key={event.id} data-event-id={event.id}>
                  <strong>{event.title}</strong> - {event.description} on {event.date}
                  <button className="delete-event" onClick={() => deleteEvent(event.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="right">
          <div className="button-container-calendar">
            <h3 id="monthAndYear">{`${currentMonth + 1} ${currentYear}`}</h3>
            <button id="previous" onClick={previous}>‹</button>
            <button id="next" onClick={next}>›</button>
          </div>
          <table className="table-calendar" id="calendar" data-lang="en">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody id="calendar-body">
              {/* Render the calendar cells here */}
            </tbody>
          </table>
          <div className="footer-container-calendar">
            <label htmlFor="month">Jump To: </label>
            <select id="month" onChange={jump}>
              <option value={0}>Jan</option>
              <option value={1}>Feb</option>
              <option value={2}>Mar</option>
              <option value={3}>Apr</option>
              <option value={4}>May</option>
              <option value={5}>Jun</option>
              <option value={6}>Jul</option>
              <option value={7}>Aug</option>
              <option value={8}>Sep</option>
              <option value={9}>Oct</option>
              <option value={10}>Nov</option>
              <option value={11}>Dec</option>
            </select>
            <select id="year" onChange={jump}>
              {/* Render year options dynamically if needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
