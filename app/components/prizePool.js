'use client';
import styles from '../styles/prizePool.module.css';

export default function PrizePool() {
  return (
    <section id="prize-pool" className={styles.prizePoolSection}>
      <h2 className={styles.title}>Prize Pool</h2>
      <div className={styles.prizeContent}>
        <div className={`${styles.prize} ${styles.firstPrize}`}>
          <span className={styles.trophy}>🏆</span>
          <h3>1st Prize</h3>
          <p className={styles.amount}>₹10,000</p>
          <p className={styles.certificate}>+ Certificate</p>
        </div>
        <div className={`${styles.prize} ${styles.secondPrize}`}>
          <span className={styles.trophy}>🥈</span>
          <h3>2nd Prize</h3>
          <p className={styles.amount}>₹5,000</p>
          <p className={styles.certificate}>+ Certificate</p>
        </div>
        <div className={`${styles.prize} ${styles.thirdPrize}`}>
          <span className={styles.trophy}>🥉</span>
          <h3>3rd Prize</h3>
          <p className={styles.amount}>₹5,000</p>
          <p className={styles.certificate}>+ Certificate</p>
        </div>
      </div>
    </section>
  );
}