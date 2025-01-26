import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Search, Menu, User, MapPin, BookOpen, Star } from 'lucide-react';

function StudentSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies'];

  const tutors = [
    { name: 'Dr. Sharma', qualification: 'PhD in Physics', location: 'Hyderabad', subjects: ['Physics', 'Mathematics'], rating: 4.8 },
    { name: 'Prof. Reddy', qualification: 'M.Tech', location: 'Hyderabad', subjects: ['Mathematics'], rating: 4.9 },
    { name: 'Mrs. Lakshmi', qualification: 'M.Sc Chemistry', location: 'Nizamabad', subjects: ['Chemistry', 'Biology'], rating: 4.7 },
    { name: 'Mr. Kumar', qualification: 'MA English', location: 'nizamabad', subjects: ['English'], rating: 4.6 },
    { name: 'Dr. Rao', qualification: 'PhD in Biology', location: 'Hyderabad', subjects: ['Biology'], rating: 4.9 }
  ];

  const filteredTutors = tutors.filter(tutor => {
    const locationMatch = tutor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const subjectMatch = !selectedSubject || tutor.subjects.includes(selectedSubject);
    return locationMatch && subjectMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-slate-50">
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
            <Link to="/student/login" className="text-navy-900 hover:text-navy-800">Login</Link>
            <Link to="/student/register" className="bg-navy-900 text-white px-4 py-2 rounded-lg hover:bg-navy-800">Register</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-8">Find Tutors</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-2 items-center">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
              />
            </div>
            <div className="flex gap-2 items-center">
              <BookOpen className="w-5 h-5 text-gray-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
              >
                <option value="">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTutors.map((tutor, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg text-navy-900">{tutor.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{tutor.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{tutor.qualification}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map(subject => (
                      <span key={subject} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
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

export default StudentSearch;