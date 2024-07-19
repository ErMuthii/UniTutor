// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Input, Button, Card, CardBody } from '@nextui-org/react';
// import axios from 'axios';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://your-backend-api-url/login', {
//         email,
//         password
//       });

//       if (response.data.success) {
//         navigate('/dashboard'); // Navigate to the dashboard or home page on successful login
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       setError('Login failed. Please check your credentials and try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="max-w-sm w-full">
//         <CardBody className="p-6">
//           <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <Input
//               clearable
//               underlined
//               fullWidth
//               label='Email'
//               labelPlaceholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//             type="password"
//             label="Password"
//               clearable
//               underlined
//               fullWidth
//               labelPlaceholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <Button type="submit" color="primary" fullWidth>
//               Login
//             </Button>
//           </form>
//           <p className="text-center mt-4">
//             Don't have an account?{' '}
//             <a
//               href="/signup"
//               className="text-blue-500 hover:underline"
//             >
//               Sign up
//             </a>
//           </p>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here (e.g., form validation, API call)
    // For now, just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

