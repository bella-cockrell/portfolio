import React from 'react';
import Experience from './Pages/Experience';
import SVGLogo from './Components/SVGLogo';
import Skills from './Components/Skills';
import Projects from './Pages/Projects';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>

      <header>
        <h1> Hi, I'm Bella Cockrell </h1>
      </header>
      <nav>
        Home
        Experience
        Projects
      </nav>

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
        This is the footer
      </footer>
    </div >
  );
}

export default App;
