import React from 'react'
import Navbar from '../components/Navbar'
import HeroIn from '../components/HeroIn'
import Work from '../components/Work'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Education from '../components/Education'
const Home = () => {
  return (
   <div>
        
      <Navbar/>
      <HeroIn/>
      <Work/>
      <Education />
      <Skills />
      <Footer/>
      </div>
  )
}

export default Home
