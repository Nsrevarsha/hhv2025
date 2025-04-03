'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="/logo.png" alt="HHV 2025" className="logo-image" />
        </a>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="toggle-icon"></span>
        </button>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={(e) => handleNavClick(e, 'home')}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#themes" className="navbar-link" onClick={(e) => handleNavClick(e, 'themes')}>
              Themes
            </a>
          </li>
          <li className="navbar-item">
            <a href="#schedule" className="navbar-link" onClick={(e) => handleNavClick(e, 'schedule')}>
              Schedule
            </a>
          </li>
          {/* <li className="navbar-item">
            <a href="#sponsors" className="navbar-link" onClick={(e) => handleNavClick(e, 'sponsors')}>
              Collaborators
            </a>
          </li> */}
          <li className="navbar-item">
            <a href="#faq" className="navbar-link" onClick={(e) => handleNavClick(e, 'faq')}>
              FAQ
            </a>
          </li>
          <li className="navbar-item">
            <a href="#footer" className="navbar-link" onClick={(e) => handleNavClick(e, 'footer')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
