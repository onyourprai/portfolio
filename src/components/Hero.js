import React from 'react'

function Hero() {
  return (
    <main className="hero" id="home">
      <div className="floating-icon icon-top-left">
        <i className="fa-solid fa-code"></i>
      </div>
      <div className="floating-icon icon-top-right">
        <i className="fa-solid fa-microchip"></i>
      </div>
      <div className="floating-icon icon-bottom-left">
        <i className="fa-solid fa-mobile-screen"></i>
      </div>
      <div className="floating-icon icon-bottom-right">
        <i className="fa-regular fa-lightbulb"></i>
      </div>

      <div className="content-wrapper">
        <h2 className="sub-title">Hi there! This is the portfolio of</h2>
        <br />
        <br />
        <h1 className="sr-only">Thanyalak Namso - Co-op Engineering Student Portfolio</h1>
        <h2 className="main-title">
          <span className="purple-text" id="typing-text"></span>
        </h2>
        <br />
        <br />
        <h5 className="year">
          Thanyalak Namso | Electronic Engineering Technology, KMUTNB
        </h5>
        <br />
        <div className="hero-buttons">
          <a href="mailto:pray41811@gmail.com" className="btn-resume">
            Let's Connect
          </a>
          <a href="#resume" id="openResumeBtn" className="btn-resume">
            View Resume
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
