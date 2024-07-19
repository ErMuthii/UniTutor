import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-3xl font-bold mb-2">
            Tuto<span className="text-red-500">rfy</span>
          </h3>
          <div className="mb-4">
            <Link to="/" className="text-white hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link to="/courses" className="text-white hover:text-blue-400">
              Courses
            </Link>
            <span className="mx-2">|</span>
            
            <Link to="/contact" className="text-white hover:text-blue-400">
              Contact
            </Link>
          </div>
          <p className="text-gray-400">
            &copy; 2024 <strong>Tutorfy</strong> All rights reserved
          </p>
        </div>

        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-xl mr-3" />
            <p>
              <span>Strathmore University</span>
              <br />
              Nairobi, Kenya
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-xl mr-3" />
            <p>+254 14**9**258</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-xl mr-3" />
            <p>
              <a href="mailto:serviceconnect@gmail.com" className="text-red-500 hover:text-blue-400">
                tutorfy@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">About the company</h3>
            <p className="text-gray-400">
              <strong>Tutorfy</strong> is a platform that connects students with the best tutors and resources for academic success.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
