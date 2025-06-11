import React, { useState, useEffect } from 'react';

const defaultRoadmap = [
  {
    semester: 1,
    subjects: [
      "Introduction to Programming",
      "Digital Logic Design",
      "Mathematics I",
      "Physics",
      "English Communication"
    ]
  },
  {
    semester: 2,
    subjects: [
      "Object Oriented Programming",
      "Data Structures",
      "Mathematics II",
      "Basic Electronics",
      "Technical Writing"
    ]
  },
  // Add more semesters as needed
];

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(defaultRoadmap);

  useEffect(() => {
    // Here you can fetch the roadmap data from your backend
    // For now using default data
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">B.Tech CSE Roadmap</h1>
        <div className="space-y-8">
          {roadmap.map((sem) => (
            <div key={sem.semester} className="bg-[#1F1F1F] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Semester {sem.semester}</h2>
              <ul className="space-y-2">
                {sem.subjects.map((subject, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;