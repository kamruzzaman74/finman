'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaInfoCircle, FaSignInAlt, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo (Visible on Desktop and Mobile) */}
        <div className="text-2xl font-extrabold text-yellow-400 cursor-pointer">
          <Link href="/" passHref>
            <span aria-label="Navigate to main page" className="hover:text-yellow-500 transition-all">
              FinmanBD
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavItem href="/About" icon={<FaInfoCircle />} label="About Us" />
          <NavItem href="/Book" icon={<FaCalendarAlt />} label="Book Now" />
        </div>

        {/* Sign In Button (Desktop) */}
        <div className="hidden lg:flex">
          <Link href="/sign" passHref>
            <button className="flex items-center px-4 py-2 bg-yellow-400 text-blue-800 text-sm font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
              <FaSignInAlt />
              <span className="ml-2">Sign In</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Finman Logo Inside Mobile Menu */}
          <Link href="/" passHref>
            <span
              onClick={() => setIsOpen(false)}
              className="text-3xl font-extrabold text-yellow-400 hover:text-yellow-500 transition-all duration-300"
            >
              FinmanBD
            </span>
          </Link>

          {/* Nav Links */}
          <NavItem href="/About" icon={<FaInfoCircle size={24} />} label="About Us" closeMenu={() => setIsOpen(false)} />
          <NavItem href="/Book" icon={<FaCalendarAlt size={24} />} label="Book Now" closeMenu={() => setIsOpen(false)} />

          {/* Sign In Button in Mobile */}
          <Link href="/sign" passHref>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center px-6 py-3 bg-yellow-400 text-blue-800 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              <FaSignInAlt size={20} />
              <span className="ml-2">Sign In</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ href: string; icon: React.ReactNode; label: string; closeMenu?: () => void }> = ({
  href,
  icon,
  label,
  closeMenu,
}) => (
  <Link href={href} passHref>
    <span
      onClick={closeMenu}
      className="flex items-center text-white text-lg font-medium hover:text-yellow-400 transition-all duration-300 cursor-pointer"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </span>
  </Link>
);

export default Navbar;
