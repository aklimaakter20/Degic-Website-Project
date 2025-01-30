import React from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Work from './components/Work';
import LogoSection from './components/LogoSection';
import Illustration from './components/Illustration';
import Work2 from './components/Work2';
import Work3 from './components/Work3';
import Presentation2 from './components/Presentation2';
import Blog from './components/Blog';

function App() {

  return (
    <>
  <Navbar/>
  <Hero/>
  <Presentation/>
  <Work/>
  <LogoSection/>
  <Illustration/>
  <Work2/>
  <Work3/>
  <Presentation2/>
  <Blog/>
    </>
  )
}

export default App
