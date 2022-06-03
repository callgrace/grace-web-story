import React from 'react';
import About from '../components/About';
import CurrentProject from '../components/CurrentProject';
import WorkSamples from '../components/WorkSamples';
import Contact from '../components/Contact';

const Home = () => (
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <About />
      <CurrentProject />
      <WorkSamples />
      <Contact />
    
      <div class="pl-4">
      
          Minimal Blog
      
      </div>
    </div>
    
  </div>

)

export default Home;