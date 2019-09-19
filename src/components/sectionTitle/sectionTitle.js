import React from 'react';

const SectionTitle = ({ title, subtitle, subtitleClass }) => (
    <div className='title_wrapper'>
      <h2 className='title_h2' dangerouslySetInnerHTML={{ __html: title }}/>
      <p className={subtitleClass}>{subtitle}</p>
    </div>
);

export default SectionTitle;