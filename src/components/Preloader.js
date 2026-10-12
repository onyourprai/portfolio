import React from 'react'

const taglines = ['Learn.', 'Build.', 'Solder.', 'Ship.']

function Preloader() {
  return (
    <div className="preloader" id="preloader">
      <div className="preloader-particles" id="preloaderParticles"></div>
      <div className="preloader-brand">
        <div className="preloader-brand-main">
          <span className="preloader-brand-name">Thanyalak</span>
          <span className="preloader-brand-accent">Namso</span>
        </div>
        <div className="preloader-brand-subtitle">
          <span className="subtitle-line"></span>
          <span>Personal Portfolio</span>
          <span className="subtitle-line"></span>
        </div>
      </div>
      <div className="preloader-sleek-track">
        <div className="preloader-sleek-fill" id="preloaderSleekFill"></div>
      </div>
      <div className="preloader-tagline">
        {taglines.map((word, index) => (
          <span key={word} className="tagline-word" style={{ '--w': index }}>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Preloader
