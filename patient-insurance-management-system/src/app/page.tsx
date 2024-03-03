import React from 'react';
import { Link } from 'react-router-dom';

let createContext;
if (typeof window !== 'undefined') {
  createContext = require('react').createContext;
}

const Page = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Medilink</h1>
      <p>Your trusted patient insurance management app</p>
      <Link to="/login" className="login-btn">Login</Link>
    </div>
  );
};

export default Page;
