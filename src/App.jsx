import React from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Work from './components/Work';
import LogoSection from './components/LogoSection';
import Illustration from './components/Illustration';

function App() {

  return (
    <>
  <Navbar/>
  <Hero/>
  <Presentation/>
  <Work/>
  <LogoSection/>
  <Illustration/>
    </>
  )
}

export default App
