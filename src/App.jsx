import React from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Work from './components/Work';
import LogoSection from './components/LogoSection';

function App() {

  return (
    <>
  <Navbar/>
  <Hero/>
  <Presentation/>
  <Work/>
  <LogoSection/>
    </>
  )
}

export default App
