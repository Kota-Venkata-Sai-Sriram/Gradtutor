import React, { useState } from 'react';
import { Search, User, MoreVertical, HelpCircle, AlertTriangle, DollarSign, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
  userType: 'student' | 'tutor';
}

function MainLayout({ children, userType }: MainLayoutProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-slate-50">
      {/* Left Side Navigation */}
      <div className="fixed left-4 top-4 flex flex-col space-y-4">
        <Link 
          to={`/${userType}/search`}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
        >
          <Search className="w-5 h-5 text-navy-900" />
        </Link>
        
        <Link 
          to={`/${userType}/profile`}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
        >
          <User className="w-5 h-5 text-navy-900" />
        </Link>

        {userType === 'tutor' && (
          <Link 
            to="/tutor/lecture-notes"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
          >
            <FileText className="w-5 h-5 text-navy-900" />
          </Link>
        )}

        {userType === 'student' && (
          <>
            <Link 
              to="/student/view-notes"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
            >
              <FileText className="w-5 h-5 text-navy-900" />
            </Link>
            <Link 
              to="/student/tutorials"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
            >
              <BookOpen className="w-5 h-5 text-navy-900" />
            </Link>
          </>
        )}

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
          >
            <MoreVertical className="w-5 h-5 text-navy-900" />
          </button>

          {showMenu && (
            <div className="absolute left-12 top-0 bg-white rounded-lg shadow-lg py-2 w-32">
              <button
                onClick={() => {
                  setShowHelp(true);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Help
              </button>
              <button
                onClick={() => {
                  setShowReport(true);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                Report
              </button>
              {userType === 'student' && (
                <Link
                  to="/student/payment"
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                >
                  <DollarSign className="w-4 h-4" />
                  Payment
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How do I find a tutor?</h3>
                <p className="text-gray-600">You can search for tutors by location using the search bar on the Search Tutors page.</p>
              </div>
              <div>
                <h3 className="font-semibold">How do I access lecture notes?</h3>
                <p className="text-gray-600">Click on the notes icon in the sidebar to view or upload lecture notes.</p>
              </div>
              <div>
                <h3 className="font-semibold">Where can I find online tutorials?</h3>
                <p className="text-gray-600">Students can access online tutorials by clicking the book icon in the sidebar.</p>
              </div>
            </div>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-6 bg-navy-900 text-white px-4 py-2 rounded-lg hover:bg-navy-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {showReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
            <textarea
              className="w-full h-32 p-2 border rounded-lg resize-none"
              placeholder="Describe the issue..."
            ></textarea>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowReport(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle report submission
                  setShowReport(false);
                }}
                className="bg-navy-900 text-white px-4 py-2 rounded-lg hover:bg-navy-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-20 px-4">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;