import React from 'react'

import Navbar from './components/nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import TimeLine from './components/Timeline.jsx'
import { MarqueeDemo } from './components/Techskills.jsx'
import Projects from './components/Projects.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TimeLine />
      <MarqueeDemo />
      <Projects />
    </div>
  )
}

export default App