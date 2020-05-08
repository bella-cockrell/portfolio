import React from 'react';
import Experience from './Pages/Experience';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1> Hi, I'm Bella Cockrell </h1>
      <article>
        <AboutMe />
        <Contact />
      </article>
      <Experience />
    </div>
  );
}

export default App;
