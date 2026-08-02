import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import TimeLine from './components/Timeline.jsx'
import { MarqueeDemo } from './components/Techskills.jsx'
import Projects from './components/Projects.jsx'
import Certifcates from './components/Certifcates.jsx'
import Contact from './components/Contact.jsx'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TimeLine />
      <MarqueeDemo />
      <Projects />
      <Certifcates />
      <Contact />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Analytics />
    </div>
  )
}

export default App