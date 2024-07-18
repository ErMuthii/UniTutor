import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import axios from 'axios';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signup', {
        name,
        email,
        password,
        course,
      });
      if (response.status === 201) {
        setSuccess('Sign up successful!');
        setError('');
        // Clear the form
        setName('');
        setEmail('');
        setPassword('');
        setCourse('');
      }
    } catch (error) {
      setError('Sign up failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-6 text-center">Student Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <Input 
          clearable
          label="Name"
          fullWidth
          className="mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          clearable
          label="Email"
          type="email"
          fullWidth
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          clearable
          label="Password"
          type="password"
          fullWidth
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
          clearable
          label="Course"
          fullWidth
          className="mb-4"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <Button 
          color="primary" 
          fullWidth 
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
