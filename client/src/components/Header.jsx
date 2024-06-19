import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assests/img/logo.svg'; // Ensure this path is correct
import { HashLink } from 'react-router-hash-link';
import menu_open from '../assests/img/menu-open.svg';
import menu_close from '../assests/img/menu-close.svg';
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScrollWithOffset = (el) => {
    const yOffset = -70; // Adjust this value according to your header height
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  };

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }


  return (

    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <nav ref={menuRef} className={`nav ${isNavOpen ? 'show' : ''}`}>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
        <Link to="about" smooth={true} duration={500} className="btn" onClick={toggleNav} offset={-70}>
          About
        </Link>
        <Link to="experiences" smooth={true} duration={500} className="btn" onClick={toggleNav} offset={-70}>
          Experiences
        </Link>
        <Link to="projects" smooth={true} duration={500} className="btn" onClick={toggleNav} offset={-70}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="btn" onClick={toggleNav} offset={-70}>
          Contact
        </Link>
        <HashLink to='#connect' className="vvd" scroll={handleScrollWithOffset}>
          <button><span>Let’s Connect</span></button>
        </HashLink>
      </nav>
    </header>
  );
}

export default Header;
