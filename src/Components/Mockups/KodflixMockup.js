import React from 'react';

import Monitor from '../../Images/monitor.svg';
import Kodflix from '../../Images/kodflix.png';

const KodflixMockup = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img style={{ position: 'relative', width: '100%', height: 'auto' }} src={Monitor} />
      <img style={{ position: 'absolute', top: '13.5%', right: '0', bottom: '0', left: '35%', }} src={Kodflix} />
    </div>
  )
}


export default KodflixMockup;
