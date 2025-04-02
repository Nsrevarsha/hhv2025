'use client';

import { useState } from 'react';
import styles from '../styles/schedule.module.css';

const initialEvents = [
  {
    id: 1,
    title: 'Round 1: Project Kickoff',
    date: 'Day 1 - Morning',
    description: 'Team formation, project ideation, and initial planning phase.'
  },
  {
    id: 2,
    title: 'Round 2: Development Sprint',
    date: 'Day 1 - Afternoon',
    description: 'Core feature development and technical implementation.'
  },
  {
    id: 3,
    title: 'Round 3: Progress Review',
    date: 'Day 2 - Morning',
    description: 'Project milestone check-in and feedback session.'
  },
  {
    id: 4,
    title: 'Final Round: Project Showcase',
    date: 'Day 2 - Afternoon',
    description: 'Final presentations, demos, and project evaluation.'
  }
];

export default function Schedule() {
  const [events, setEvents] = useState(initialEvents);

  const addNewEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: `New Round ${events.length + 1}`,
      date: 'TBD',
      description: 'Description pending...'
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className={styles.scheduleContainer}>
      <h2 style={{ 
        textAlign: 'center', 
        color: 'var(--color-pink-dark)',
        marginBottom: '30px',
        fontFamily: '"Courier New", monospace'
      }}>
        Hackathon Timeline
      </h2>
      
      <div className={styles.timeline}>
        {events.map((event) => (
          <div key={event.id} className={styles.timelineEvent}>
            <div className={styles.timelineNode}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineTitle}>{event.title}</h3>
              <div className={styles.timelineDate}>{event.date}</div>
              <p className={styles.timelineDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '30px' 
      }}>
  
      </div>
    </div>
  );
}