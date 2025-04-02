"use client"

import { useState, useEffect } from "react"
import Header from "./header.js"
import Hero from "./hero.js"
import About from "./about.js"
import Schedule from "./schedule.js"
import Sponsors from "./sponsors.js"
import Faq from "./faq.js"
import Footer from "./footer.js"
import "../styles/2000s.css"

export default function HackathonLanding() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visitorCount, setVisitorCount] = useState(Math.floor(Math.random() * 10000) + 5000)

  // Simulate 2000s page loading experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  // Add some classic 2000s elements
  const showWelcomeMessage = () => {
    alert("Welcome to the WTM REC Hackathon 2024 - Y2K Edition! 🚀")
  }

  return (
    <div className="container">
      {!isLoaded && (
        <div className="loading-screen">
          <div className="loading-text">Loading...</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      )}

      <div className={`page-content ${isLoaded ? "loaded" : ""}`}>
        <Header />
        <Hero showWelcomeMessage={showWelcomeMessage} />
        <div className="marquee">
          <div className="marquee-content">
            <span>🔥 REGISTER NOW FOR EARLY BIRD PRIZES! 🔥</span>
            <span>💻 OVER $10,000 IN PRIZES TO BE WON! 💻</span>
            <span>🚀 LIMITED SPOTS AVAILABLE! 🚀</span>
            <span>🌟 NETWORK WITH INDUSTRY EXPERTS! 🌟</span>
          </div>
        </div>
        <About />
        <Schedule />
        <Sponsors />
        <Faq />
      </div>
    </div>
  )
}

