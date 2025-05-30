import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black px-4 py-2 fixed top-0 z-50 shadow-md w-full">
      <div className="flex justify-between items-center">
        <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:ml-auto`}
      >
        <a href="#about" className="px-4 py-2 text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#skills" className="px-4 py-2 text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" className="px-4 py-2 text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" className="px-4 py-2 text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact Me</a>
      </div>
    </div>
  );
}
