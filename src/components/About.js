import React from 'react'
import profile from '../assets/profile.png'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="profile-header">
        <div className="profile-img-main">
          <img src={profile} alt="Thanyalak Namso" />
        </div>
      </div>
      <div className="glass-card scroll-reveal">
        <h2>
          About Me - <span className="purple-text">Get To Know Me!</span>
        </h2>
        <p>
          Hi, I'm Thanyalak Namso, a dedicated 4th-year Electronic Engineering Technology (Computer)
          student at KMUTNB with a strong interest in programming and system management. I enjoy
          logical thinking, tackling new challenges, and collaborating with others to get things done
          efficiently.
          <br />
          <br />
          I'm looking for a co-op opportunity to build on my foundational coding skills, learn from
          experienced professionals, and gain practical hands-on experience.
        </p>
      </div>
    </section>
  )
}

export default About
