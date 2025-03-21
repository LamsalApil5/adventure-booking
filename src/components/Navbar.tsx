import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Hide navbar on /sfomle route
  if (location.pathname === "/sfomle") return null;

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-none text-primary-foreground transition-transform duration-300">
      <div className="flex justify-between items-center px-16 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png?height=300&width=800"
            alt="About Us Hero"
            className="w-24 h-auto object-cover opacity-60"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`hover:text-white/80 transition-colors ${
              isActive("/") ? "font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/adventures"
            className={`hover:text-white/80 transition-colors ${
              isActive("/adventures") ? "font-semibold" : ""
            }`}
          >
            Adventures
          </Link>
          <Link
            to="/about"
            className={`hover:text-white/80 transition-colors ${
              isActive("/about") ? "font-semibold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-white/80 transition-colors ${
              isActive("/contact") ? "font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Full-screen Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8 text-black" />
          </button>

          {/* Navigation Links - Vertical Layout */}
          <nav className="flex flex-col gap-6 text-center">
            <Link
              to="/"
              className={`text-2xl text-black font-semibold ${
                isActive("/") ? "underline" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/adventures"
              className={`text-2xl text-black font-semibold ${
                isActive("/adventures") ? "underline" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Adventures
            </Link>
            <Link
              to="/about"
              className={`text-2xl text-black font-semibold ${
                isActive("/about") ? "underline" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-2xl text-black font-semibold ${
                isActive("/contact") ? "underline" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
