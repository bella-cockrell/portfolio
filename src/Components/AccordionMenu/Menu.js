import React from 'react';
import Accordion from './Accordion';
import getPages from '../../Pages/GetPages';

const Menu = () => {
  return (
    <div> {
      getPages().map(page => (
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
