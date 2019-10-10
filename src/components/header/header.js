import React, { useState } from 'react';

import logo from '../../images/Logo.svg';
import menuButton from '../../images/menu-button.svg';

const menuItems = [ 'About', 'Resources', 'Community', 'Blog', 'Subscribe'];

const Header = () => {
  const [ dropDownVisibility, setdropDownVisibility] = useState('none');
  const [ menuIsOpen, setMenuIsOpen] = useState('');

  const openDropDown = () => {
    dropDownVisibility === 'none' ? setdropDownVisibility('flex') : setdropDownVisibility('none');
  };

  const handleMobileMenu = () => {
    menuIsOpen === '' ? setMenuIsOpen('open') : setMenuIsOpen('');
  };

  return (
    <header className='header'>
      <a href='#main' className='header_logo'>
        <img src={logo} alt='logo' />
      </a>

      <nav className={`header_menu ${menuIsOpen}`}>
        {menuItems.map(item => (
          <p className='header_menu_item' onClick={handleMobileMenu}>
            <a href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </p>
        ))}

        {/* social drop-down */}
        <div className='header_menu_drop-down'>
          <div className='header_menu_drop-down_arrow'>
            <p className='header_menu_item' onClick={openDropDown}>Social</p>
            <i class="fas fa-chevron-down" onClick={openDropDown}></i>
          </div>

          <div className='header_menu_drop-down_social-group' style={{ display: dropDownVisibility }}>
            <p className='header_menu_social-item'>Discord</p>
            <p className='header_menu_social-item'>Telegram</p>
            <p className='header_menu_social-item'>Reddit</p>
            <p className='header_menu_social-item'>Forum</p>
          </div>
        </div>
        {/* <i class="fas fa-chevron-down" onClick={openDropDown}></i> */}

      </nav>

      <div className='header_mobile-menu'>
        <img className='header_mobile-menu_button' src={menuButton} onClick={handleMobileMenu} alt='menu button' />
      </div>

    </header>
  )
};

export default Header;