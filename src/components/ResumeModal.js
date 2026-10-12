import React from 'react'

function ResumeModal() {
  return (
    <div id="resumeModal" className="resume-modal">
      <div className="resume-modal-content glass-card">
        <span className="close-modal" id="closeResumeBtn">
          &times;
        </span>
        <h2 style={{ marginBottom: '20px' }}>
          My Resume - <span className="purple-text">On Paper!</span>
        </h2>
        <div className="resume-iframe-container">
          <iframe
            title="Resume"
            src={process.env.PUBLIC_URL + '/resume.pdf'}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
