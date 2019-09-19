import React from 'react';

import logo from '../../images/Logo.svg';
import menuButton from '../../images/menu-button.svg';

const menuItems = [ 'About', 'Resources', 'Community', 'Blog', 'Social'];

const Header = () => (
  <header className='header'>
    <a href='#main'><img src={logo} alt='logo' className='header_logo'/></a>

    <ul className='header_menu'>
      {menuItems.map(item => (
        <li className='header_menu_item'><a href={`#${item.toLowerCase()}`}>{item}</a></li>
      ))}
    </ul>
    
    <a href='#about'><img className='header_menu-button' src={menuButton} alt='menu button' /></a>
  </header>
);

export default Header;