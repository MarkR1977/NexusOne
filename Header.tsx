import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    onNavClick(section);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#00324e]/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            NexusOne
          </h1>
          <p className="hidden md:block ml-3 text-sm text-gray-300">Your One-Stop Financial Partner</p>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 mx-2 text-white transition-colors duration-300 ${
                activeSection === item.id 
                ? 'border-b-2 border-[#00bcd4] font-medium' 
                : 'hover:text-[#00bcd4]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#00324e] shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-white ${
                  activeSection === item.id 
                  ? 'bg-[#00bcd4]/20 font-medium border-l-4 border-[#00bcd4]' 
                  : 'hover:bg-[#00bcd4]/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;