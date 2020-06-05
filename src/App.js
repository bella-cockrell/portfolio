import React from 'react';
import Logo from './Images/logo.svg';
import './App.css';
import Menu from './Components/AccordionMenu/Menu';

import Github from './Images/github.svg';
import LinkedIn from './Images/linkedin.svg';
import Twitter from './Images/twitter.svg';

function App() {
  return (
    <div className='App'>

      <header>
        <h1> Hi, I'm <span style={{ color: '#2a9d8f' }}>Bella Cockrell</span></h1>
        <img src={Logo} alt='a cartoon portait of me' />
      </header>

      <div className='contact-card'>
          <a href='https://github.com/bella-cockrell' alt='Github' target='_blank' rel="noopener noreferrer">
            <img src={Github} />
          </a>
          <a href='https://twitter.com/heybellac' alt='Twitter' target='_blank' rel="noopener noreferrer">
            <img src={Twitter} />
          </a>
          <a href='https://www.linkedin.com/in/bella-cockrell/' alt='Linkedin' target='_blank' rel="noopener noreferrer">
            <img src={LinkedIn} />
          </a>
      </div>

      <body>
        <Menu />
      </body>

    </div >
  );
};

export default App;
