import React from 'react';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';

import './App.css';

function App() {
  return (
    <div>
      <h1> Hi, I'm Bella Cockrell </h1>
      <h2>
        About me
      </h2>
      <p>
        I am a frontend dev with a keen spirit and an eye for design. I like
        always to improve my knowledge by challenging myself and learn new
        technologies.
      </p>
      <article>
        <Contact />
      </article>
      <Experience />
    </div>
  );
}

export default App;
