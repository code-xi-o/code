import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1F1F1F] py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-600">CODE XI</Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link to="/roadmap" className="hover:text-red-600 transition-colors">Roadmap</Link>
          <Link to="/courses" className="hover:text-red-600 transition-colors">Courses</Link>
          <Link to="/admin" className="hover:text-red-600 transition-colors">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;