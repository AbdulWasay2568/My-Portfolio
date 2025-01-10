import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-light px-4 py-2">
        <div className="flex flex-col text-white lg:flex-row lg:ml-auto justify-center ">
            <Link to="/" className="px-4 py-2 text-lg hover:text-gray-400">Home</Link>
            <Link to="#skills" className="px-4 py-2 text-lg hover:text-gray-400">Skills</Link>
            <Link to="/projects" className="px-4 py-2 text-lg hover:text-gray-400">Projects</Link>
            <Link to="#aboutme" className="px-4 py-2 text-lg hover:text-gray-400">About Me</Link>
            <Link to="#contact" className="px-4 py-2 text-lg hover:text-gray-400">Contact Me</Link>
        </div>
        
      </div>
  );
}
