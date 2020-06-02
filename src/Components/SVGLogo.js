import React from 'react';
import Logo from './logo.svg';

const SVGLogo = () => {
  return (
    <img src={Logo}
      alt='a cartoon portait of me'
      style={{ width: '100%' }}
    />
  );
};

export default SVGLogo;
