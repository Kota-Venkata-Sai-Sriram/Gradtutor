import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TutorSearch from './pages/TutorSearch';
import StudentSearch from './pages/StudentSearch';
import StudentLogin from './pages/StudentLogin';
import StudentRegistration from './pages/StudentRegistration';
import GraduateLogin from './pages/GraduateLogin';
import GraduateRegistration from './pages/GraduateRegistration';
import Payment from './pages/Payment';
import HikeRequest from './pages/HikeRequest';
import LectureNotes from './pages/LectureNotes';
import ViewNotes from './pages/ViewNotes';
import OnlineTutorials from './pages/OnlineTutorials';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-sky-200 to-slate-50">
        <Link to="/" className="fixed top-4 left-4 flex items-center space-x-2">
          <img src="/logo.png" alt="GRADTUTOR" className="h-12" />
        </Link>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutor/search" element={<TutorSearch />} />
          <Route path="/student/search" element={<StudentSearch />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/register" element={<StudentRegistration />} />
          <Route path="/graduate/login" element={<GraduateLogin />} />
          <Route path="/graduate/register" element={<GraduateRegistration />} />
          <Route path="/student/payment" element={<Payment />} />
          <Route path="/tutor/hike-request" element={<HikeRequest />} />
          <Route path="/tutor/lecture-notes" element={<LectureNotes />} />
          <Route path="/student/view-notes" element={<ViewNotes />} />
          <Route path="/student/tutorials" element={<OnlineTutorials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;