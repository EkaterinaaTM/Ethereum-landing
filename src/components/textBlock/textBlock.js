import React from 'react';

const TextBlock = ({ title, desc }) => (
  <div className='text-block'> 
    <h3 className='title_h3' dangerouslySetInnerHTML={{ __html: title }}/>
    <span className='green-line' />
    <p className='text-block_text' dangerouslySetInnerHTML={{ __html: desc}} />
  </div>
);

export default TextBlock;