import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mountain } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8" />
            <span className="text-xl font-bold">ThrillNepal</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-white/80 transition-colors ${isActive('/') ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/adventures" 
              className={`hover:text-white/80 transition-colors ${isActive('/adventures') ? 'font-semibold' : ''}`}
            >
              Adventures
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-white/80 transition-colors ${isActive('/about') ? 'font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-white/80 transition-colors ${isActive('/contact') ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2">
            <Link 
              to="/" 
              className={`block py-2 hover:text-white/80 transition-colors ${isActive('/') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/adventures" 
              className={`block py-2 hover:text-white/80 transition-colors ${isActive('/adventures') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Adventures
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 hover:text-white/80 transition-colors ${isActive('/about') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 hover:text-white/80 transition-colors ${isActive('/contact') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
