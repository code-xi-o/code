import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CODE XI</h3>
            <p className="text-gray-400">Your Gateway to Professional Programming Education</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>Location: Sidhi, M.P., India - 486771</p>
              <p>Follow us on Instagram:</p>
              <div className="flex gap-4">
                <a href="https://instagram.com/justkishan_" target="_blank" className="text-red-600 hover:text-red-500">@justkishan_</a>
                <a href="https://instagram.com/yuvrajsingh_o6" target="_blank" className="text-red-600 hover:text-red-500">@yuvrajsingh_o6</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CODE XI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;