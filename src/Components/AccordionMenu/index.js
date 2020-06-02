import React, { useState } from 'react';
import { AccordionWrapper, InternalWrapper } from './styles.js';

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <AccordionWrapper>
      <button padding='5px' onClick={handleClick}>
        <h2>About Me</h2>
      </button>
      <InternalWrapper open={open}>
        <p>info about me</p>
      </InternalWrapper>
    </AccordionWrapper>
  );
};

export default Accordion;
