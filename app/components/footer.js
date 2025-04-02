'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links-table">
          <div className="footer-links-group">
            <h3 className="footer-links-title">Connect</h3>
            <div className="social-links">
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.svg" alt="Twitter" />
              </a>
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

        <div className="visitor-counter"> 
          <span>Visitors: 1337</span>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Women Techmakers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}