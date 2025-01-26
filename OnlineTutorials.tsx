import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Search, ExternalLink, Youtube, BookOpen } from 'lucide-react';

function OnlineTutorials() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const tutorials = [
    {
      id: 1,
      title: 'Complete Mathematics Course',
      platform: 'YouTube',
      subject: 'Mathematics',
      link: 'https://youtube.com/playlist?list=example1',
      description: 'Comprehensive mathematics course covering algebra, calculus, and more.',
    },
    {
      id: 2,
      title: 'Physics Made Easy',
      platform: 'Udemy',
      subject: 'Physics',
      link: 'https://udemy.com/course/example2',
      description: 'Learn physics concepts through practical examples and animations.',
    },
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

  const filteredTutorials = tutorials.filter(tutorial => 
    (selectedSubject === '' || tutorial.subject === selectedSubject) &&
    (tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     tutorial.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <MainLayout userType="student">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Online Tutorials</h1>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
                />
              </div>
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
            >
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-6">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {tutorial.platform === 'YouTube' ? (
                        <Youtube className="w-5 h-5 text-red-600" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-purple-600" />
                      )}
                      <span className="text-sm font-medium text-gray-600">
                        {tutorial.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <span className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                      {tutorial.subject}
                    </span>
                  </div>
                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sky-600 hover:text-sky-800"
                  >
                    <span>View</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default OnlineTutorials;