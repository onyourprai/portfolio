import React from 'react'
import { navItems } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            Thanyalak<span className="purple-text">Namso</span>
          </h2>
          <p className="footer-tagline">Where electronics meets code.</p>
        </div>

        <ul className="footer-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={'#' + item.id}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="footer-socials">
          <a
            href="https://github.com/onyourprai"
            target="_blank"
            rel="noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:pray41811@gmail.com" className="social-link email" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Thanyalak Namso. All rights reserved.</p>
        <button id="backToTop" className="back-to-top" aria-label="Back to Top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  )
}

export default Footer
