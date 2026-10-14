import React from 'react'

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
    </section>
  )
}

export default Profiles
