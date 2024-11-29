import React from 'react'
import Header from './Header'
import Present from './Present'
import About from './About'
import Capacities from './Capacities'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Present />
      <About />
      <Capacities />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main