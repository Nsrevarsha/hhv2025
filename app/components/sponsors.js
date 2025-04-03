'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/sponsors.module.css';

const collaborators = [
  {
    name: 'Collaborator 1',
    logo: '/logos/collab1.svg',
  },
  {
    name: 'Collaborator 2',
    logo: '/logos/collab2.svg',
  },
  {
    name: 'Collaborator 3',
    logo: '/logos/collab3.svg',
  },
  {
    name: 'Collaborator 3',
    logo: '/logos/collab3.svg',
  },
  {
    name: 'Collaborator 3',
    logo: '/logos/collab3.svg',
  },
  {
    name: 'Collaborator 3',
    logo: '/logos/collab3.svg',
  }   
];

export default function Sponsors() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="sponsors" className={styles.sponsorsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Collaborators</h2>
        <div className={styles.logoGrid}>
          {isLoading ? (
            <div className={styles.loading}>Loading collaborators...</div>
          ) : (
            collaborators.map((collaborator, index) => (
              <div key={index} className={styles.logoWrapper}>
                <img
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                  className={styles.logo}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}