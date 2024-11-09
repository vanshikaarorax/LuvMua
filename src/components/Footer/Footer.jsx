import React from 'react';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="links">
        <div className="icon-link">
          <BtnInstagram />
          <a href="" target="_blank">
            <span>INSTAGRAM</span>
          </a>
        </div>
        <span>|</span>
        <a
          href=""
          target="_blank"
        >
          <span className="full-tnc">TERMS AND CONDITIONS</span>
          <span className="small-tnc">T &#38; C</span>
        </a>
      </div>
      <div className="copyright">
        
      </div>
    </footer>
  );
}

export default Footer;
