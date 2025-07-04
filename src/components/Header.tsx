import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg text-gray-700' : 'bg-transparent text-gray-300'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/Logo.png" 
              alt="Laciola" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Laciola</span>
              <span className={`text-xs font-medium tracking-wider uppercase ${isScrolled ? 'text-gray-600' : 'text-gray-400'}`}>Information Technology</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#solutions" className="hover:text-blue-600 transition-colors font-medium">Solutions</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Solutions</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;