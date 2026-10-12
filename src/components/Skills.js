import React from 'react'
import { skills, skillFilters } from '../data'

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">
        Technical Skills - <span className="purple-text">Core Expertise!</span>
      </h2>

      <div className="skill-filters" id="skillFilters">
        {skillFilters.map((f) => (
          <button
            key={f.key}
            className={f.key === 'all' ? 'filter-btn active' : 'filter-btn'}
            data-filter={f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="skill-grid" id="skillGrid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card" data-category={s.category}>
            <i className={s.icon}></i>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
