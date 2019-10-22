import React, { useState } from "react"

import logo from "../../images/Logo.svg"
import menuButton from "../../images/menu-button.svg"

const menuItems = ["About", "Resources", "Community", "Blog", "Subscribe"]

const socialItems = [
  { name: "Discord", href: "https://discordapp.com/invite/nthXNEv" },
  { name: "Telegram", href: "https://t.me/EthereumRu" },
  { name: "Reddit", href: "https://www.reddit.com/r/ethereum/" },
  { name: "Forum", href: "https://forum.ethereum.org/" },
]

const Header = () => {
  const [dropDownVisibility, setdropDownVisibility] = useState("none")
  const [menuIsOpen, setMenuIsOpen] = useState("")

  const openDropDown = () => {
    dropDownVisibility === "none"
      ? setdropDownVisibility("flex")
      : setdropDownVisibility("none")
  }

  const handleMobileMenu = () => {
    menuIsOpen === "" ? setMenuIsOpen("open") : setMenuIsOpen("")
  }

  return (
    <header className="header">
      <a href="Ethereum-landing/#main">
        {/* TODO logo chage sizes white u open burger */}
        <img src={logo} alt="logo" className="header_logo" />
      </a>

      <nav className={`header_menu ${menuIsOpen}`}>
        {menuItems.map(item => (
          <p className="header_menu_item" onClick={handleMobileMenu}>
            <a href={`Ethereum-landing/#${item.toLowerCase()}`}>{item}</a>
          </p>
        ))}

        {/* social drop-down */}
        <div className="header_menu_drop-down">
          <div className="header_menu_drop-down_arrow">
            <p className="header_menu_item" onClick={openDropDown}>
              Social
            </p>
            <i class="fas fa-chevron-down" onClick={openDropDown}></i>
          </div>

          <div
            className="header_menu_drop-down_social-group"
            style={{ display: dropDownVisibility }}
          >
            {socialItems.map((item, index) => (
              <p className="header_menu_social-item" key={index}>
                <a href={item.href} target="_blank">
                  {item.name}
                </a>
              </p>
            ))}
          </div>
        </div>
      </nav>

      <div className="header_mobile-menu">
        <img
          className="header_mobile-menu_button"
          src={menuButton}
          onClick={handleMobileMenu}
          alt="menu button"
        />
      </div>
    </header>
  )
}

export default Header
