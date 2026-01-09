import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force solid header on non-home pages
  const showSolidHeader = isScrolled || !isHome;

  // For inner pages, we want text to be dark always if header is solid (which it is)
  // But strictly speaking, if !isHome, we are on white background, so we want dark text immediately.
  const headerClass = showSolidHeader
    ? "bg-white/95 backdrop-blur-md shadow-sm text-gray-900"
    : "bg-transparent text-primary-950"; // Use dark navy for high contrast on light hero

  // Logo invert logic:
  // If solid header (white bg) -> normal logo
  // If transparent header (on home hero) -> keep it dark? Or was it white?
  // The Hero background is now `bg-gray-50`. It's light.
  // So the logo should be normal (dark) always!
  // The original code had `filter brightness-0 invert` for white logo on dark background.
  // Since we changed theme to "Corporate Navy" but Hero has `bg-gray-50` (light), we probably want DARK logo always.
  // Wait, let's check Hero.tsx again.
  // Hero is `bg-gray-50`. Text is `text-gray-900`.
  // So if Header is transparent on top of Hero, we need DARK text and DARK logo.
  // So we DON'T need `brightness-0 invert` anymore found in original code.

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/Logo.png"
              alt="Laciola"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold text-primary-900`}
              >
                Laciola
              </span>
              <span
                className={`text-xs font-medium tracking-wider uppercase text-gray-500`}
              >
                Information Technology
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              hash="home"
              className="hover:text-primary-600 transition-colors font-medium text-sm"
            >
              Home
            </Link>
            <Link
              to="/"
              hash="about"
              className="hover:text-primary-600 transition-colors font-medium text-sm"
            >
              About
            </Link>
            <Link
              to="/"
              hash="services"
              className="hover:text-primary-600 transition-colors font-medium text-sm"
            >
              Services
            </Link>
            <Link
              to="/"
              hash="solutions"
              className="hover:text-primary-600 transition-colors font-medium text-sm"
            >
              Solutions
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 bg-white shadow-lg rounded-b-lg absolute left-0 right-0 px-6">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                hash="home"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/"
                hash="about"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/"
                hash="services"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/"
                hash="solutions"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
