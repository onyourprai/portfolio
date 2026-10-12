import React from 'react'
import { projects } from '../data'

function ProjectButton({ href, icon, label }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="project-btn primary-btn">
        <i className={icon}></i> {label}
      </a>
    )
  }
  return (
    <a href="#projects" className="project-btn primary-btn inactive-btn">
      <i className={icon}></i> {label}
    </a>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Projects Showcase - <span className="purple-text">What I've Built!</span>
      </h2>
      <br />
      <div className="experience-grid">
        {projects.map((p, index) => (
          <div key={p.title} className="experience-card">
            <div className="experience-date">{'PROJECT 0' + (index + 1)}</div>
            <div className="project-tag" style={{ display: 'inline-block', width: 'max-content' }}>
              {p.tag}
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="project-stack">{p.stack}</p>
            <div className="project-links-wrapper">
              <ProjectButton href={p.live} icon="fa-regular fa-eye" label="View Live" />
              <ProjectButton href={p.github} icon="fa-brands fa-github" label="GitHub" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
