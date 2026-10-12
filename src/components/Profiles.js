import React from 'react'
import kuromi from '../assets/kuromi.png'

const profiles = [
  {
    name: 'GitHub',
    caption: 'Commit',
    href: 'https://github.com/onyourprai',
    icon: 'fa-brands fa-github',
    color: '#fff',
  },
  {
    name: 'Gmail',
    caption: 'Say hi',
    href: 'mailto:pray41811@gmail.com',
    icon: 'fa-solid fa-envelope',
    color: '#ea4335',
  },
]

function Profiles() {
  return (
    <section className="profiles-section" id="profiles">
      <h2 className="section-title">
        Web Presence - <span className="purple-text">Find Me Here!</span>
      </h2>
      <div className="profile-header">
        <div className="profile-img-main">
          <img src={kuromi} alt="Thanyalak Namso" />
        </div>
        <div className="profile-text">
          <p className="purple-text">@onyourprai</p>
        </div>
      </div>

      <div className="profiles-grid">
        {profiles.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="profile-card">
            <div className="profile-icon">
              <i className={p.icon} style={{ color: p.color }}></i>
            </div>
            <div className="profile-info">
              <h3>{p.name}</h3>
              <p>{p.caption}</p>
            </div>
          </a>
        ))}
      </div>
      <br />
      <p className="profile-note">LinkedIn coming soon.</p>
    </section>
  )
}

export default Profiles
