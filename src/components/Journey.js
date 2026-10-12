import React from 'react'
import { timeline } from '../data'

function Journey() {
  const items = timeline.map((item, index) => (
    <div key={item.title} className={'timeline-item ' + item.side}>
      <div className="timeline-number">{'0' + (index + 1)}</div>
      <div className="timeline-content">
        <div className="project-tag">{item.place}</div>
        <h3>{item.title}</h3>
        <p style={{ textAlign: 'left', padding: '10px 0' }}>
          {item.points.map((point, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <>
                  <br />
                  <br />
                </>
              )}
              • {point}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-dot"></div>
    </div>
  ))

  return (
    <section className="projects-section" id="experience">
      <h2 className="section-title">
        Journey - <span className="purple-text">Experience & Education!</span>
      </h2>
      <br />
      <div className="timeline">
        <div className="timeline-line">
          <div className="timeline-progress"></div>
        </div>
        {items}
      </div>
    </section>
  )
}

export default Journey
