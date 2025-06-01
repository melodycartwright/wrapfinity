import React from 'react';

const Navbar = () => {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide text-yellow-400">
            Wrapfinity
          </div>
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
    );
};
export default Navbar;