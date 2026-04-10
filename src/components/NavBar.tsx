import { useState } from 'react';
import { Menu, X, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About Me', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Education', href: '/#education' },
  ];

  return (
    <div className="bg-black/90 backdrop-blur-md px-4 py-3 fixed top-0 z-50 shadow-lg w-full border-b border-[#1f2937]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Brand / Logo */}
        <Link to="/" className="text-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          AWD
        </Link>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute top-full left-0 w-full bg-black flex-col items-center py-4 gap-4 lg:static lg:w-auto lg:bg-transparent lg:flex lg:flex-row lg:items-center lg:gap-8 lg:py-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <Link
            to="/resume"
            className="lg:hidden flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={16} />
            Resume
          </Link>
          
          {/* Mobile only Hire Me */}
          <a
            href="#contact"
            className="lg:hidden flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Mail size={16} />
            Hire Me
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/resume"
            className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
          >
            <FileText size={18} />
            Resume
          </Link>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            <Mail size={16} />
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
