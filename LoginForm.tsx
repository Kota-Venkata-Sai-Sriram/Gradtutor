import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  userType: 'student' | 'graduate';
}

function LoginForm({ userType }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">EMAIL ID :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
      </div>
      
      <div>
        <label className="block text-gray-700 mb-2">PASSWORD :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
        <div className="flex justify-end mt-1">
          <Link to="/forgot-password" className="text-purple-600 hover:text-purple-800 text-sm">
            Forgot password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-sky-200 hover:bg-sky-300 text-navy-900 font-bold py-3 px-6 rounded-full transition-colors"
      >
        LOGIN
      </button>
    </form>
  );
}

export default LoginForm;