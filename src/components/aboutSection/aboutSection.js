import React from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import TextBlock from '../TextBlock/TextBlock';
import data from '../../data.js';

const AboutSection = () => (
  <section className='about' id='about'>
    
    <SectionTitle
      title='Decentralized. Immutable. Unstoppable.'
      subtitle='Govern yourself'
      subtitleClass='subtitle_p--green'/>

    <div className='flex-row--between'>
      {data.about.map(item => <TextBlock {...item} /> )}
    </div>

    <div className='flex-row--center'>
      {data.features.map(feature => <FeaturesBlock {...feature} /> )}
    </div>
  </section>
);


const FeaturesBlock = ({ img, desc }) => (
  <div className='flex-row--center_item'> 
    <img src={img} className='flex-row--center_img'/>
    <p dangerouslySetInnerHTML={{ __html: desc }}/>
  </div>
);

export default AboutSection;