'use client';

import { useState } from 'react';
import styles from '../styles/faq.module.css';

const FAQData = [
  {
    question: 'What is WTM REC Hackathon?',
    answer: 'WTM REC Hackathon is a women-focused hackathon that brings together talented developers, designers, and innovators to create solutions that empower and support women in technology.'
  },
  {
    question: 'Who can participate?',
    answer: 'The hackathon is open to all women and gender minorities who are passionate about technology and innovation. Teams can include students, professionals, and enthusiasts.'
  },
  {
    question: 'Do I need to have coding experience?',
    answer: 'While coding experience is helpful, we welcome participants of all skill levels. The hackathon provides mentorship and resources to help you learn and grow.'
  },
  {
    question: 'What kind of projects can I build?',
    answer: 'You can build any project that aligns with our theme of empowering women in technology. This could include web applications, mobile apps, AI/ML solutions, or any innovative tech solution.'
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No, participation in the WTM REC Hackathon is completely free! We believe in making technology accessible to everyone.'
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={`${styles.questionButton} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </button>
      <div className={`${styles.answer} ${isOpen ? styles.show : ''}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {FAQData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;