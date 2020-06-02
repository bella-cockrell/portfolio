import React from 'react';
import Accordion from './index';
import Pages from '../../Pages/Pages';

const Menu = () => {
  return (
    <div> {
      Pages().map(page => (
        <Accordion
          title={page.title}
          content={page.content}
        />
      ))
    }
    </div>
  )
}

export default Menu;
