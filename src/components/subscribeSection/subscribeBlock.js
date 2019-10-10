import React from 'react';

import Button from '../button/button.js';

const SubscribeBlock = ({ title }) => (
  <div className='text-block--justify-large'>
    <h4 className='title_h4' dangerouslySetInnerHTML={{ __html: title }}/>
    <input className='input' placeholder='Enter E-mail address'/>
    <Button text='Subscribe' className='button--sm--green'/>
  </div>
);

export default SubscribeBlock;