import React from 'react';
import About from '../components/About';
import CurrentProject from '../components/CurrentProject';
import WorkSamples from '../components/WorkSamples';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <About />
    <CurrentProject />
    <WorkSamples />
    <Contact />
  
    <div class="pl-4">
      <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
        Minimal Blog
      </a>
    </div>
  </>

)

export default Home;