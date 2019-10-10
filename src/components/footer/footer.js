import React from 'react';

import logo from '../../images/Logo.svg';
const ethereumTypes = ['ETCDev', 'IOHK', 'ETC Labs', 'ETC Asia', 'ETC Korea', 'ETC Itelia', 'ETC China'];

const social = [
  {
    name: 'Discord',
    link: ''
  },
  {
    name: 'Telegram',
    link: ''
  },
  {
    name: 'Reddit',
    link: ''
  },
  {
    name: 'Forum',
    link: ''
  }
];
const Footer = () => (
  <footer className='footer'>
    <div className='footer_wrapper container'>
      <div className='footer_col'>
        <p class='subtitle_p'><span>Ethereum</span> Classic</p>
        {ethereumTypes.map(type => <p className='footer_text'>{type}</p>)}
      </div>

      <div className='footer_col'>
        <h3 class='subtitle_p'>Social</h3>
        {social.map(item => (
        <p className='footer_text'>
          <a href={item.link} target='_blank'>
            {item.name}
          </a>
        </p>))}
        <p className='text--green'>@ETH_Classic</p>
      </div>

      <img src={logo} alt='logo' className='footer_logo'/>
    </div>
  </footer>
);

export default Footer;