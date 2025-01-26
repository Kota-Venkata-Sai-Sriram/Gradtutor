import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Calendar, Upload, FileText } from 'lucide-react';

function LectureNotes() {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState([
    { id: 1, subject: 'Mathematics', date: '2024-03-15', title: 'Algebra Basics', file: 'algebra.pdf' },
    { id: 2, subject: 'Physics', date: '2024-03-14', title: 'Newton Laws', file: 'newton.pdf' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle note upload
    if (file) {
      setNotes([
        ...notes,
        {
          id: notes.length + 1,
          subject,
          date,
          title,
          file: file.name,
        },
      ]);
      setSubject('');
      setDate('');
      setTitle('');
      setFile(null);
    }
  };

  return (
    <MainLayout userType="tutor">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6">Upload Lecture Notes</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Upload File</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-2" />
                  <span className="text-gray-600">Click to upload or drag and drop</span>
                  <span className="text-sm text-gray-500">PDF, DOC, DOCX (Max 10MB)</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-navy-900 text-white py-3 rounded-lg hover:bg-navy-800 transition-colors"
            >
              Upload Notes
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Uploaded Notes</h2>
          <div className="space-y-4">
            {notes.map((note) => (
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

export default LectureNotes;