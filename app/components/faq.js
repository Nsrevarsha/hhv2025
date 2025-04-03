'use client';

import { useState } from 'react';
import styles from '../styles/faq.module.css';

const FAQData = [
  {
    question: 'Who is eligible to participate in HackerHerVerse?',
    answer: 'HackerHerVerse is an all-women inter-college hackathon. Each team must consist of 2 to 4 members, all from the same college, though they may be from different academic years or departments.'
  },
  {
    question: 'Will the hackathon be conducted online or offline?',
    answer: 'The hackathon will be fully online, and all rounds, mentorship sessions, and project submissions will take place virtually.'
  },
  {
    question: 'What is the structure of the hackathon?',
    answer: 'The hackathon consists of two rounds: Round 1: Teams submit their idea in a prescribed PPT format. Final Round: Shortlisted teams develop a prototype, submit a Git repository, and present their project to judges.'
  },
  {
    question: 'What are the important dates to remember?',
    answer: 'Registrations Open: April 4, 2029, Round 1 Submission Deadline: April 24, 2029, Finalists Announcement: April 28, 2029, Final Hackathon: May 3 – May 4, 2029'
  },
  {
    question: 'How can teams register?',
    answer: 'Teams must register through the official hackathon platform. There is no registration fee, and each team can submit only one project.'
  },
  {
    question: 'What are the themes for the hackathon?',
    answer: 'Participants can develop projects under the following themes: Smart Sustainable Living, Health & Well-being, EdTech, Community Impact, Open Innovation'
  },
  {
    question: 'What are the project development and submission guidelines?',
    answer: 'All projects must be developed entirely during the hackathon. Pre-existing work is not allowed. Any use of pre-written code must be disclosed and acknowledged. A Minimum Viable Product (MVP) or working prototype is required for final evaluation. Teams must submit their Git repository and presentation before the deadline.'
  },
  {
    question: 'How will the projects be evaluated?',
    answer: 'Judges will evaluate projects based on: Innovation, Technical Implementation, Feasibility, User Experience, Presentation Quality'
  },
  {
    question: 'What is the expected conduct of participants?',
    answer: 'All participants must maintain professionalism and respect towards fellow competitors, mentors, and judges. Harassment, discrimination, or misconduct will lead to immediate disqualification. Teams must adhere to all scheduled sessions and deadlines.'
  },
  {
    question: 'Who makes the final decisions in the hackathon?',
    answer: 'Judges decisions are final and binding. The organizing committee reserves the right to make the final determination on all matters, including eligibility, project evaluation, and rule enforcement. The committee may amend or modify the rules at any time, with or without prior notice.'
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

export default function FAQ() {
  return (
    <section id="faq" className={styles.faqSection}>
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
}