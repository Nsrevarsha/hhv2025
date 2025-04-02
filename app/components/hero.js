"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero({ showWelcomeMessage }) {
  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <table className="hero-table">
        <tbody>
          <tr>
            <td className="hero-content">
              <h1 className="hero-title">WTM REC Hackathon 2024</h1>
              <h2 className="hero-subtitle">The Ultimate Y2K Coding Experience</h2>
              
              <div className="countdown">
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.days}</span>
                  <span className="countdown-label">DAYS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.hours}</span>
                  <span className="countdown-label">HOURS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.minutes}</span>
                  <span className="countdown-label">MINS</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.seconds}</span>
                  <span className="countdown-label">SECS</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <a href="#register" className="button-primary">REGISTER NOW!</a>
                <a href="#about" className="button-secondary">LEARN MORE</a>
                <button onClick={showWelcomeMessage} className="button-secondary">CLICK ME!</button>
              </div>
            </td>
            <td className="hero-image-cell">
              <div className="hero-image">
                
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

