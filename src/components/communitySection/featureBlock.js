import React from 'react';

const FeatureBlock = ({ img, title, subtitle }) => (
  <div className='flex-row--center_item'>
    <img src={img} alt='' className='flex-row--center_img'/>
    <h3 className='title_h3'>{title}</h3>
    <p>{subtitle}</p>
  </div>
);

export default FeatureBlock;