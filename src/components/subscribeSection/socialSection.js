import React from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import SubscribeBlock from './subscribeBlock';
import Button from '../button/button.js';
import discordLogo from '../../images/DiscordLogo.svg';

const SubscribeSection = () => (
  <section className='wrapper'  id='subscribe'>
    <SectionTitle
      title='Stay up to date'
      subtitle='Get the most up-to-date newsletters delivered straight to your email. Whether you’re looking for general information, hard fork/network upgrades, or live chat the choice is yours.'
      subtitleClass='subtitle_text--short'/>
      
    <div className='flex-row--between'>
      <SubscribeBlock title='<span>ETC</span> Newsletter'/>
      <SubscribeBlock title='Hard Fork / Network Updates'/>

      <div className='text-block--justify-large'>
        <img src={discordLogo} alt='discordLogo' className='m32'/>
        <input className='input--purple' placeholder='ETC - Ethereum Classic'/>
        <div className='flex-row'>
          <p>590 user(s) online</p>
          <Button text='Subscribe' className='button--sm--purple '/>
        </div>
      </div>
    </div>

  </section>
);

export default SubscribeSection;