import React, { useState, useEffect } from 'react';

const defaultCourses = [
  {
    id: 1,
    title: "Python Programming",
    instructor: "Code With Harry",
    videoUrl: "https://www.youtube.com/embed/gfDE2a7MKjA",
    description: "Complete Python Course for Beginners"
  },
  {
    id: 2,
    title: "C++ Programming",
    instructor: "Apna College",
    videoUrl: "https://www.youtube.com/embed/z9bZufPHFLU",
    description: "Complete C++ Course with DSA"
  },
  // Add more courses
];

const Courses = () => {
  const [courses, setCourses] = useState(defaultCourses);

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-[#1F1F1F] rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={course.videoUrl}
                  title={course.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-2">Instructor: {course.instructor}</p>
                <p className="text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;