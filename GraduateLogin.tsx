import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function GraduateLogin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Graduate Login</h1>
        <LoginForm userType="graduate" />
        <div className="mt-4 text-center">
          <Link to="/graduate/register" className="text-sky-600 hover:text-sky-800">
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GraduateLogin;