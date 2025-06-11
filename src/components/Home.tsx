import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to CODE XI</h1>
          <p className="text-xl mb-8">Your Gateway to Professional Programming Education</p>
          <div className="flex justify-center gap-6">
            <Link to="/roadmap" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Roadmaps
            </Link>
            <Link to="/courses" className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
              Browse Courses
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 py-12">
          <div className="bg-[#1F1F1F] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Founder</h2>
            <div className="space-y-2">
              <p>Name: KISHAN TIWARI</p>
              <p>Location: Sidhi, M.P., India - 486771</p>
              <p>Instagram: <a href="https://instagram.com/justkishan_" target="_blank" className="text-red-600">@justkishan_</a></p>
            </div>
          </div>

          <div className="bg-[#1F1F1F] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Co-Founder</h2>
            <div className="space-y-2">
              <p>Name: YUVRAJ SINGH</p>
              <p>Location: Sidhi, M.P., India - 486771</p>
              <p>Instagram: <a href="https://instagram.com/yuvrajsingh_o6" target="_blank" className="text-red-600">@yuvrajsingh_o6</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;