"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">WTM REC HACKATHON</span>
        </div>
        
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
        
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#schedule">SCHEDULE</a></li>
            <li><a href="#sponsors">SPONSORS</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#register" className="nav-button">REGISTER</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

