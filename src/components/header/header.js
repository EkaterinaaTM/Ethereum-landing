import React, { useState } from 'react';

import logo from '../../images/Logo.svg';
import menuButton from '../../images/menu-button.svg';

const menuItems = [ 'About', 'Resources', 'Community', 'Blog', 'Subscribe'];

const Header = () => {
  const [ dropDownVisibility, setdropDownVisibility] = useState('none');

  const openDropDown = () => {
    dropDownVisibility === 'none' ? setdropDownVisibility('flex') : setdropDownVisibility('none');
  }

  return (
    <header className='header'>
      <a href='#main'><img src={logo} alt='logo' className='header_logo'/></a>

      <nav className='header_menu'>
        {menuItems.map(item => (
          <p className='header_menu_item'><a href={`#${item.toLowerCase()}`}>{item}</a></p>
        ))}

        {/* social drop-down */}
        <div className='header_menu_drop-down'>
          <p className='header_menu_item' onClick={openDropDown}>Social</p>

          <div className='header_menu_drop-down_social-group' style={{ display: dropDownVisibility }}>
            <p className='header_menu_social-item'>Discord</p>
            <p className='header_menu_social-item'>Telegram</p>
            <p className='header_menu_social-item'>Reddit</p>
            <p className='header_menu_social-item'>Forum</p>
          </div>
        </div>
        <i class="fas fa-chevron-down" onClick={openDropDown}></i>

      </nav>

      <a href='#about'><img className='header_menu-button' src={menuButton} alt='menu button' /></a>
    </header>
  )
};

export default Header;