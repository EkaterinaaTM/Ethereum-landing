import React from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import TextBlock from '../TextBlock/TextBlock';
import FeatureBlock from './featureBlock';
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
      {data.features.map(feature => <FeatureBlock {...feature} /> )}
    </div>
  </section>
);

export default AboutSection;