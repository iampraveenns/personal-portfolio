import React from 'react'

import Navbar from './components/nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App