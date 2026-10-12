import React from 'react'

const fields = [
  { id: 'name', label: 'Name', type: 'text', icon: 'user' },
  { id: 'email', label: 'Email', type: 'email', icon: 'envelope' },
  { id: 'message', label: 'Message', type: 'textarea', icon: 'comment' },
]

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">
          Get In Touch - <span className="purple-text">Let's Talk!</span>
        </h2>
        <h4 className="contact-note">
          Looking for a co-op student or have a project in mind?
          <br /> I'd love to hear from you.
        </h4>
        <div className="contact-card">
          <form id="contactForm" className="contact-form">
            {fields.map((f) => (
              <div key={f.id} className="form-group">
                {f.type === 'textarea' ? (
                  <textarea id={f.id} name={f.id} rows="4" required placeholder=" "></textarea>
                ) : (
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.id}
                    required
                    placeholder=" "
                    autoComplete="off"
                  />
                )}
                <label htmlFor={f.id}>{f.label}</label>
                <i className={'fa-solid fa-' + f.icon + ' input-icon'}></i>
              </div>
            ))}
            <button type="submit" className="btn-resume btn-submit">
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
