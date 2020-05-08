import React from 'react';
import Experience from './Pages/Experience';
import SVGLogo from './Components/SVGLogo';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1> Hi, I'm Bella Cockrell </h1>
      <SVGLogo />
      <article>
        <AboutMe />
        <Contact />
      </article>
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
