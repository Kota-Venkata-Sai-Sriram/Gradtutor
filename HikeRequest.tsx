import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';

function HikeRequest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hikeAmount, setHikeAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle hike request submission
  };

  return (
    <MainLayout userType="tutor">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Request Salary Hike</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Requested Hike Amount (%)</label>
            <input
              type="number"
              value={hikeAmount}
              onChange={(e) => setHikeAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Reason for Hike Request</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none h-32 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-navy-900 text-white py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default HikeRequest;