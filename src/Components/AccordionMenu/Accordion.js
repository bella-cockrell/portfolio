import React, { useState } from 'react';
import { Button, AccordionWrapper, InternalWrapper } from './AccordionStyles.js';

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <AccordionWrapper>
      <Button onClick={handleClick}>
        <h1>{title}</h1>
      </Button>
      <InternalWrapper open={open}>
        {content}
      </InternalWrapper>
    </AccordionWrapper>
  );
};

export default Accordion;
