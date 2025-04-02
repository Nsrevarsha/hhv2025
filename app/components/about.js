'use client';
import { useEffect, useRef } from 'react';
import styles from '../styles/about.module.css';

export default function About() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About WTM REC Hackathon</h2>
        <div className={styles.content} ref={textRef}>
          <p className={styles.description}>
            Welcome to WTM REC Hackathon - where innovation meets inclusivity! 
            This unique hackathon experience is designed to empower and inspire 
            tech enthusiasts to create solutions that make a difference. Join us 
            for an exciting journey of coding, collaboration, and creativity.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.icon}>🚀</span>
              <h3>24 Hours of Innovation</h3>
              <p>Unleash your creativity in an intensive coding experience</p>
            </div>
            <div className={styles.highlight}>
              <span className={styles.icon}>👥</span>
              <h3>Team Building</h3>
              <p>Collaborate with like-minded innovators</p>
            </div>
            <div className={styles.highlight}>
              <span className={styles.icon}>🏆</span>
              <h3>Amazing Prizes</h3>
              <p>Win exciting rewards and recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}