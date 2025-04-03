'use client';

export default function Footer() {
  return (
    <section className="footer" id="footer">
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links-table">
          <div className="footer-links-group">
            <h3 className="footer-links-title">Connect</h3>
            <div className="social-links">
              <a href="mailto:gdg@rajalakshmi.edu.in" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/gmail.svg" alt="Gmail" />
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7257406962101870594/" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/wtmrec/?igsh=MW1zZnZ1MnNrNG5wZg%3D%3D" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@gdgrec" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.svg" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="footer-links-group contact-group">
            <h3 className="footer-links-title contact-title">Contact Us</h3>
            <div className="contact-details">
              <p className="contact-item">
                Sakthisree Moliyan Vel: <a href="tel:+918825522339">+91 88255 22339</a>
              </p>
              <p className="contact-item">
                Prajein CK: <a href="tel:+917200246022">+91 72002 46022</a>
              </p>
              <p className="contact-item">
                Sre varsha N: <a href="tel:+917200467328">+91 72004 67328</a>
              </p>
            </div>
          </div>
        </div>

        <div className="visitor-counter"> 
          <a href="https://www.linkedin.com/in/nsrevarsha/" style={{ color: '#000000', textDecoration: 'none' }}>
            <span>Website Developed by...Sre varsha.N</span>
          </a>
        </div>
        
        <div className="copyright">
          © {new Date().getFullYear()} WTM REC. All rights reserved.
        </div>
      </div>
    </footer>
  </section>
  );
}