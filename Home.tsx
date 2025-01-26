import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="mb-16">
        <img src="/logo.png" alt="GRADTUTOR" className="w-48 h-48 mx-auto" />
        <h1 className="text-4xl font-bold text-center text-navy-900 mt-4">GRADTUTOR</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <Link
          to="/tutor/search"
          className="flex-1 bg-sky-200 hover:bg-sky-300 text-navy-900 font-bold py-4 px-8 rounded-full text-center text-xl transition-colors"
        >
          TUTORS
        </Link>
        <Link
          to="/student/search"
          className="flex-1 bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-8 rounded-full text-center text-xl transition-colors"
        >
          STUDENTS
        </Link>
      </div>
    </div>
  );
}

export default Home;