import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PatientLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Patient login with username:', username, 'and password:', password);
    // Add your login logic here for patients
    router.push('/duo');
  };

  return (
    <main>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2 text-blue-800">
            Welcome to Medilink, your trusted partner for healthcare management
          </h1>
          <div className="mt-8 max-w-md w-full">
            <div className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Patient Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-between mb-4">
                <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Patient Sign In
                </button>
                <Link href="/forgot-password">
                  <div className="text-sm text-gray-1200 cursor-pointer">Forgot Password?</div>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-purple-800">New User?</h2>
              <Link href="/patientsignup">
                <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PatientLogin;
