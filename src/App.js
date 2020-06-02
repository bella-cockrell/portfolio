import React from 'react';
import SVGLogo from './Components/SVGLogo';
import './App.css';
import Accordion from './Components/AccordionMenu/index';

function App() {
  return (
    <div className='App'>

      <header>
        <h1> Hi, I'm <span style={{ color: '#2a9d8f' }}>Bella Cockrell</span></h1>
        <SVGLogo />
      </header>
      <Accordion />
      <footer>Made with Love</footer>
    </div>
  );
};

export default App;
