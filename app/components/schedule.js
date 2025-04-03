'use client';

import { useState } from 'react';
import styles from '../styles/schedule.module.css';

const initialEvents = [
  {
    id: 1,
    title: 'APRIL 4',
    description: 'Official announcement & registration opens for Round 1. Teams can sign up and access guidelines.'
  },
  {
    id: 2,
    title: 'April 4 – 24 ',
    description: 'Mentorship sessions for Round 1 participants to refine their ideas with expert guidance.'
  },
  {
    id: 3,
    title: 'April 24',
    description: 'Deadline for Round 1 idea submissions. Teams submit proposals for evaluation.'
  },
  ,
  {
    id: 4,
    title: 'April 28',
    description: 'Announcement of shortlisted teams moving to the final round.'
  },
  {
    id: 5,
    title: 'April 29 – May 2',
    description: 'Mentorship sessions to help finalists develop prototypes and prepare for the final hackathon.'
  },
  {
    id: 6,
    title: 'May 3 – 4 ',
    description: 'Final hackathon where teams build, present, and compete for top prizes.'
  }
];

export default function Schedule() {
  const [events, setEvents] = useState(initialEvents);

  return (
    <section id="schedule" className={styles.scheduleSection}>
      <h2 className={styles.sectionTitle}>
        Hackathon Timeline
      </h2>
      
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {events.map((event) => (
          <div key={event.id} className={styles.timelineEvent}>
            <div className={styles.timelineNode}>
              <div className={styles.nodeCircle}></div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineTitle}>{event.title}</h3>
              <div className={styles.timelineDate}>{event.date}</div>
              <p className={styles.timelineDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}