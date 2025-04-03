"use client"

import { useState, useEffect } from "react"
import '../styles/hero.css'
import Image from "next/image"

export default function Hero({ showWelcomeMessage }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        // Set target date to May 3rd, 2025 at 00:00:00
        const targetDate = new Date('2025-05-03T00:00:00');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        // Detailed logging for debugging
        console.log('Target Date (May 3rd, 2025):', targetDate.toLocaleString());
        console.log('Current Date:', now.toLocaleString());
        console.log('Time Difference (ms):', difference);

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          console.log('Time until May 3rd, 2025:', {
            days,
            hours,
            minutes,
            seconds
          });

          setCountdown({
            days,
            hours,
            minutes,
            seconds
          });
        } else {
          console.log('Countdown finished - May 3rd, 2025 has passed');
          setCountdown({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          });
        }
      } catch (error) {
        console.error('Error in countdown calculation:', error);
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => {
      console.log('Cleaning up countdown timer');
      clearInterval(timer);
    };
  }, []);

  // Log current state on each render
  console.log('Current countdown state:', countdown);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image">
          <Image 
            src="/logo.png"
            alt="WTM REC Hackathon Logo"
            width={800}
            height={480}
            className="responsive-logo"
            priority
          />
        </div>
        
        <div className="hero-right">
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbgJwFEsInJupZmE7U4h9Jm93lIzFmEMMg-2BaBCfNgeOXHg/viewform?usp=sharing" className="button-primary">Register now  ^_^</a>
          </div>
          <div className="scroll-down">
            <span 
              className="scroll-icon" 
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
              🡻
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
