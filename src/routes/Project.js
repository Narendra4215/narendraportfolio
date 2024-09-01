import React from 'react';
import Navbar from '../components/Navbar';

import HeroIn2 from '../components/HeroIn2';
import Footer from '../components/Footer';
import Work from '../components/Work';

let Project = () => {
  return(
    <>
 <Navbar/>
<HeroIn2 heading="PROJECTS." text="Some of my most Recent Works."/>
<Work/>
<Footer/>


    </>
  )
}

export default Project 
