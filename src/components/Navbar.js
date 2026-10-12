import React from 'react'
import { navItems } from '../data'

function Navbar() {
  return (
    <nav className="site-nav" id="siteNav">
      <div className="nav-pill">
        <span className="nav-indicator" id="navIndicator"></span>
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={'#' + item.id}
            className={index === 0 ? 'nav-link active' : 'nav-link'}
            data-section={item.id}
          >
            <i className={'fa-solid fa-' + item.icon + ' nav-icon'}></i>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
