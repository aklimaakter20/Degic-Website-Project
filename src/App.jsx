import React from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import LogoSection from './components/LogoSection';
import Illustration from './components/Illustration';
import Work2 from './components/Work2';
import Work3 from './components/Work3';
import Presentation2 from './components/Presentation2';
import Blog from './components/Blog';
import { Slider } from '@mui/material';
import SliderPart from './components/SliderPart';
import Footer from './components/Footer';

function App() {

  return (
    <>
  <Navbar/>
  <Hero/>
  <Presentation/>
  <SliderPart/>
  <LogoSection/>
  <Illustration/>
  <Work2/>
  <Work3/>
  <Presentation2/>
  <Blog/>
  <Footer/>
    </>
  )
}

export default App
