import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'INICIO' },
    { path: '/cita', label: 'PIDE TU CITA' },
    { path: '/tienda', label: 'TIENDA' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#F60187]">
      <div className="w-full">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 pl-4 md:pl-8">
            <NavLink to="/" className="block">
              <img 
                src="/images/logo.jpg" 
                alt="Jo Los Pelines" 
                className="h-16 md:h-20 w-auto transform scale-90 md:scale-100"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 pr-12">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-semibold transition-all duration-300 transform hover:scale-110 ${
                    isActive ? 'text-white scale-105 font-bold' : 'text-white/90'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center pr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'text-white bg-black/20 scale-105 font-bold'
                        : 'text-white/90 hover:text-white hover:bg-black/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;