'use client';
import styles from '../styles/team.module.css';

export default function Team() {
  return (
    <section id="team" className={styles.teamSection}>
      <h2 className={styles.title}>Organized By</h2>
      
      <div className={styles.leadersGrid}>
        <div className={styles.leaderCard}>
          <h3>Dr.P.Kumar</h3>
          <p>Convenor</p>
        </div>
        <div className={styles.leaderCard}>
          <h3>Dr.M.Rakesh Kumar</h3>
          <p>Faculty coordinator</p>
        </div>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberImage}>
          <img src="/wtmlogo.png" alt="WTM REC Logo" className={styles.logoImage} />
        </div>
        <h3>WTM REC</h3>
      </div>
    </section>
  );
}