import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1400) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='nav-links2' onClick={closeMobileMenu}>
            arsviva<p className="bijeliTekst">kjhgkjdfghkjh</p><i className="fa fa-home"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div />
          
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <li className='nav-item'>
                <Link to='/Studio' className='nav-links' onClick={closeMobileMenu}>
                  STUDIO
              </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Architecture' className='nav-links' onClick={closeMobileMenu}>
                  ARCHITECTURE
              </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  PAINTING
              </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/Contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  CONTACT
              </Link>
              </li>
            </ul>
          </div>
      </nav>
    </>


  );
}

export default Navbar;

