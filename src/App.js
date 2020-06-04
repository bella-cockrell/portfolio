import React from 'react';
import Logo from './Images/logo.svg';
import './App.css';
import Menu from './Components/AccordionMenu/Menu';

function App() {
  return (
    <div className='App'>

      <header>
        <h1> Hi, I'm <span style={{ color: '#2a9d8f' }}>Bella Cockrell</span></h1>
        <img src={Logo} alt='a cartoon portait of me' />
      </header>

      <body>
        <Menu />
      </body>

      <footer>Check out my
        <a style={{ paddingLeft: '0.4em' }}
          href='https://github.com/bella-cockrell'
          target='_blank'
          rel='noopener noreferrer'>
          Github
        </a>
      </footer>

    </div >
  );
};

export default App;
