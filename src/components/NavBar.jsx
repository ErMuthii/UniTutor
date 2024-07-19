import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Unitutor</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/courses" className="hover:underline">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/dashboard/questions" className="hover:underline">
              Questions
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="hover:underline">
              Profile
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
