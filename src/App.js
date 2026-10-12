import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

function loadScript(name) {
  const script = document.createElement('script')
  script.src = process.env.PUBLIC_URL + '/' + name
  document.body.appendChild(script)
}

function App() {
  useEffect(() => {
    loadScript('3d_background.js')
    loadScript('script.js')
  }, [])

  return (
    <>
      <div className="scroll-progress-bar" id="scrollProgressBar"></div>
      <Navbar />
      <Preloader />
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      <div className="background-container">
        <canvas id="bg-canvas"></canvas>
      </div>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Profiles />
      <Contact />
      <Footer />
      <ResumeModal />
    </>
  )
}

export default App
