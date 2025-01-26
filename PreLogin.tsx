import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Search, Menu, User } from 'lucide-react';

function PreLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-navy-900 transform rotate-45"></div>
              <GraduationCap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-6 h-6" />
            </div>
            <span className="text-navy-900 font-bold text-xl">GRADTUTOR</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6 text-navy-900" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-navy-900" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-8">Search Students</h1>
          
          {/* Search Bar */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by location..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
              />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Student List */}
          <div className="space-y-4">
            {[
              { name: 'Raju', class: 'diploma 2nd year', location: 'Hyderabad' },
              { name: 'Ram', class: '10th class', location: 'Hyderabad' },
              { name: 'Mahesh', class: '5TH class', location: 'Nizamabad' },
              { name: 'Gopal', class: 'INTER 1st year', location: 'nizamabad' },
              { name: 'Ananya', class: '9th class', location: 'nizamabad' },
              { name: 'Harini', class: '3rd class', location: 'Hyderabad' }
            ].map((student, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900">{student.name}</h3>
                    <p className="text-gray-600">{student.class}</p>
                    <p className="text-gray-500">Location: {student.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLogin;