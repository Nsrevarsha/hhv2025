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
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About WTM REC Hackathon</h2>
        <div className={styles.content} ref={textRef}>
          <p className={styles.description}>
          HackHerVerse is an inter-college, 24-hour online hackathon exclusively for women, organized by Women Techmakers Rajalakshmi Engineering College --a vertical of Google Developer Groups On Campus - REC, Chennai. This event is designed to empower, inspire, and upskill women in technology, providing a collaborative and inclusive environment to solve real-world challenges through innovation.
          </p>
        </div>
      </div>
    </section>
  );
}