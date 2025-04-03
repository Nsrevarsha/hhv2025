"use client"

import { useState, useEffect } from "react"
import Hero from "./hero.js"
import About from "./about.js"
import Schedule from "./schedule.js"
// import Sponsors from "./sponsors.js"
import PrizePool from "./prizePool.js"
import Faq from "./faq.js"
import Themes from "./themes.js"
import "../styles/2000s.css"
import Navbar from "./navbar.js"
import Team from "./team.js"

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
        <Navbar/>
        <Hero />
        <About />
        <Themes />
        <PrizePool />
        <Schedule />
        {/* <Sponsors /> */}
        <Faq />
        <Team />
      </div>
    </div>
  )
}

