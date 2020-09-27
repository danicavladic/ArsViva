import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     <h3 className="kontaktic">CONTACT US FOR BEST EXPERIENCE WHEN VISITING WINTER FAIRYTALE IN ZAGREB...</h3>
     <h4 className="tekstic">...and you won't regret it, we promise!</h4>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h4 className="kontakt">CONTACT US</h4>
            <Link to='/'>ured.sisko@gmail.com</Link>
            <Link to='/'>01 7888 359</Link>
            <Link to='/'>ARSVIVA Studio d.o.o.</Link>
          </div>
          <div class='footer-link-items'>
            <h4 className="adresa">VISIT US</h4>
            <Link to='/'>Pete Poljanice 10</Link>
            <Link to='/'>10040</Link>
            <Link to='/'>Dubrava, Zagreb</Link>
          </div>
          <div class='footer-link-items1'>
          <div className="arsviva">arsviva</div>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <section class='social-media'>
              <div class='social-media-wrap'>
                <div class='social-icons'>
                  <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                  >
                    <i style={{ color: "black" }}  class='fab fa-facebook-f' />
                  </Link>
                  <Link
                    class='social-icon-link twitter'
                    to='https://www.instagram.com/arsvivastudio/?hl=hr'
                    target='https://www.instagram.com/arsvivastudio/?hl=hr'
                    aria-label='LinkedIn'
                  >
                    <i style={{ color: "black" }} class='fab fa-instagram' />
                  </Link>
                </div>
              </div>
            </section>
            <div className="copyright">D&D 2020©</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
