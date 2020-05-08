import React from 'react';
import Experience from './Pages/Experience';
import SVGLogo from './Components/SVGLogo';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        Home
        Experience
        Projects
      </nav>

      <header>
        <h1> Hi, I'm Bella Cockrell </h1>
      </header>

      <sidebar>
        <SVGLogo />
        <article>
          <AboutMe />
        </article>
        <article>
          <Contact />
        </article>
        <article>
          <Skills />
        </article>
      </sidebar>

      <article>
        <Experience />
        <Projects />
      </article>

      <footer>
        Hello, this is the footer
      </footer>
    </div >
  );
}

export default App;
