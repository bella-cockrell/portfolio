import React from 'react';
// import Alert from './Components/Alert';
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
      <body>
        <header>
          <h1> Hi, I'm <span style={{ color: '#2a9d8f' }}>Bella Cockrell</span></h1>
        </header>
        <nav>
        </nav>

        <main>
          <sidebar>
            <SVGLogo />
            <AboutMe />
            <Contact />
            <Skills />
          </sidebar>

          <article className='container'>
            <Experience />
            <Projects />
          </article>
        </main>

      </body>
    </div >
  );
}

export default App;
