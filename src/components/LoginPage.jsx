import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Card, CardBody } from '@nextui-org/react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://your-backend-api-url/login', {
        email,
        password
      });

      if (response.data.success) {
        navigate('/dashboard'); // Navigate to the dashboard or home page on successful login
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-sm w-full">
        <CardBody className="p-6">
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              clearable
              underlined
              fullWidth
              label='Email'
              labelPlaceholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            type="password"
            label="Password"
              clearable
              underlined
              fullWidth
              labelPlaceholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" color="primary" fullWidth>
              Login
            </Button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-blue-500 hover:underline"
            >
              Sign up
            </a>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
