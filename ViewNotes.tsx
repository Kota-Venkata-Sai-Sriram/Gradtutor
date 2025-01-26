import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { FileText, Search } from 'lucide-react';

function ViewNotes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const notes = [
    { id: 1, subject: 'Mathematics', date: '2024-03-15', title: 'Algebra Basics', file: 'algebra.pdf' },
    { id: 2, subject: 'Physics', date: '2024-03-14', title: 'Newton Laws', file: 'newton.pdf' },
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

  const filteredNotes = notes.filter(note => 
    (selectedSubject === '' || note.subject === selectedSubject) &&
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     note.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <MainLayout userType="student">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Lecture Notes</h1>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notes..."
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

          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                  <div>
                    <h3 className="font-semibold">{note.title}</h3>
                    <p className="text-sm text-gray-600">
                      {note.subject} • {new Date(note.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button className="text-sky-600 hover:text-sky-800">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ViewNotes;