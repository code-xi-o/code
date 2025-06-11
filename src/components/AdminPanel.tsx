import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('roadmap');

  const [roadmapData, setRoadmapData] = useState({
    semester: '',
    subjects: ''
  });

  const [courseData, setCourseData] = useState({
    title: '',
    instructor: '',
    videoUrl: '',
    description: ''
  });

  const handleRoadmapSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle roadmap data submission
    console.log('Roadmap data:', roadmapData);
  };

  const handleCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle course data submission
    console.log('Course data:', courseData);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
        
        <div className="flex mb-6">
          <button
            className={`px-4 py-2 ${activeTab === 'roadmap' ? 'bg-red-600' : 'bg-[#1F1F1F]'}`}
            onClick={() => setActiveTab('roadmap')}
          >
            Manage Roadmap
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'courses' ? 'bg-red-600' : 'bg-[#1F1F1F]'}`}
            onClick={() => setActiveTab('courses')}
          >
            Manage Courses
          </button>
        </div>

        {activeTab === 'roadmap' && (
          <div className="bg-[#1F1F1F] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Roadmap Content</h2>
            <form onSubmit={handleRoadmapSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Semester</label>
                <input
                  type="number"
                  value={roadmapData.semester}
                  onChange={(e) => setRoadmapData({...roadmapData, semester: e.target.value})}
                  className="w-full p-2 rounded bg-[#121212] border border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">Subjects (comma-separated)</label>
                <textarea
                  value={roadmapData.subjects}
                  onChange={(e) => setRoadmapData({...roadmapData, subjects: e.target.value})}
                  className="w-full p-2 rounded bg-[#121212] border border-gray-700"
                  rows={4}
                />
              </div>
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
                Add Roadmap
              </button>
            </form>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="bg-[#1F1F1F] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Course</h2>
            <form onSubmit={handleCourseSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Course Title</label>
                <input
                  type="text"
                  value={courseData.title}
                  onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                  className="w-full p-2 rounded bg-[#121212] border border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">Instructor</label>
                <input
                  type="text"
                  value={courseData.instructor}
                  onChange={(e) => setCourseData({...courseData, instructor: e.target.value})}
                  className="w-full p-2 rounded bg-[#121212] border border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">YouTube Video URL</label>
                <input
                  type="text"
                  value={courseData.videoUrl}
                  onChange={(e) => setCourseData({...courseData, videoUrl: e.target.value})}
                  className="w-full p-2 rounded bg-[#121212] border border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <textarea
                  value={courseData.description}
                  onChange={(e) => setCourseData({...courseData, description: e.target.value})}
                  className="w-full p-2 rounded bg-[#121212] border border-gray-700"
                  rows={4}
                />
              </div>
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
                Add Course
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;