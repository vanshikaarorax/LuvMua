import React, { useState } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
>>>>>>> d1bd911 (Initial commit)
import { Link } from 'react-router-dom';
import logo from '../../media/l.png';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
<<<<<<< HEAD
import BtnLogout from '../BtnLogout/BtnLogout';
=======
//import BtnLogout from '../BtnLogout/BtnLogout';
>>>>>>> d1bd911 (Initial commit)
import './Navbar.scss';

function Navbar() {
  const [hamburgerClass, setHamburgerClass] = useState('hamburger-contracted');
  const [aboutMeLinkClass, setAboutMeLinkClass] = useState('inactive');
  const [servicesLinkClass, setServicesLinkClass] = useState('inactive');
  const [portfolioLinkClass, setPortfolioLinkClass] = useState('inactive');
  const [faqLinkClass, setFaqLinkClass] = useState('inactive');
  const [contactLinkClass, setContactLinkClass] = useState('inactive');
<<<<<<< HEAD
  const [adminDashLinkClass, setAdminDashLinkClass] = useState('inactive');

  const token = useSelector((state) => state.tokenReducer.token);

  // there are better ways to do this but ran out of time
=======
  //const [adminDashLinkClass, setAdminDashLinkClass] = useState('inactive');
  // const token = useSelector((state) => state.tokenReducer.token);

>>>>>>> d1bd911 (Initial commit)
  const setLinkToActive = (event) => {
    event.persist();
    switch (event.target.pathname) {
      case '/about-me':
        setAboutMeLinkClass('active');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
<<<<<<< HEAD
        setAdminDashLinkClass('inactive');
=======
        // setAdminDashLinkClass('inactive');
>>>>>>> d1bd911 (Initial commit)
        break;
      case '/services':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('active');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
<<<<<<< HEAD
        setAdminDashLinkClass('inactive');
        break;
      case '/portfolio':
=======
        // setAdminDashLinkClass('inactive');
        break;
      case '/join-page':  // Update the case for the new path
>>>>>>> d1bd911 (Initial commit)
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('active');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
<<<<<<< HEAD
        setAdminDashLinkClass('inactive');
=======
        // setAdminDashLinkClass('inactive');
>>>>>>> d1bd911 (Initial commit)
        break;
      case '/faq':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('active');
        setContactLinkClass('inactive');
<<<<<<< HEAD
        setAdminDashLinkClass('inactive');
=======
        // setAdminDashLinkClass('inactive');
>>>>>>> d1bd911 (Initial commit)
        break;
      case '/contact':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('active');
<<<<<<< HEAD
        setAdminDashLinkClass('inactive');
        break;
      case '/admin':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('active');
        break;
=======
        // setAdminDashLinkClass('inactive');
        break;
      // case '/admin':
        // setAboutMeLinkClass('inactive');
        // setServicesLinkClass('inactive');
        // setPortfolioLinkClass('inactive');
        // setFaqLinkClass('inactive');
        // setContactLinkClass('inactive');
        // setAdminDashLinkClass('active');
        // break;
>>>>>>> d1bd911 (Initial commit)
      default:
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
<<<<<<< HEAD
        setAdminDashLinkClass('inactive');
=======
        // setAdminDashLinkClass('inactive');
>>>>>>> d1bd911 (Initial commit)
    }
  };

  const animateHamburger = () => {
    if (hamburgerClass === 'hamburger-contracted') {
      setHamburgerClass('hamburger-expanded');
    } else {
      setHamburgerClass('hamburger-contracted');
    }
  };

  return (
    <nav className="Navbar">
      <div className="shish-kebab">
        <Link to="/">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" data-testid="nb-link-home" />
          </div>
        </Link>
        <div className="links">
          <Link
            className={aboutMeLinkClass}
            to="/about-me"
            onClick={setLinkToActive}
<<<<<<< HEAD
            data-testid="nb-link-services"
=======
            data-testid="nb-link-about"
>>>>>>> d1bd911 (Initial commit)
          >
            ABOUT
          </Link>
          <Link
            className={servicesLinkClass}
            to="/services"
            onClick={setLinkToActive}
            data-testid="nb-link-services"
          >
            SERVICES
          </Link>
          <Link
            className={portfolioLinkClass}
<<<<<<< HEAD
            to="/portfolio"
=======
            to="/join-page"  // Updated path
>>>>>>> d1bd911 (Initial commit)
            onClick={setLinkToActive}
            data-testid="nb-link-portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className={faqLinkClass}
            to="/faq"
            onClick={setLinkToActive}
            data-testid="nb-link-faq"
          >
            FAQ
          </Link>
          <Link
            className={contactLinkClass}
            to="/contact"
            onClick={setLinkToActive}
            data-testid="nb-link-contact"
          >
            CONTACT
          </Link>
<<<<<<< HEAD
          {token ? (
=======
          {/* {token ? (
>>>>>>> d1bd911 (Initial commit)
            <div className="admin-nav-container">
              <Link
                className={adminDashLinkClass}
                to="/admin"
                onClick={setLinkToActive}
                data-testid="nb-link-admin"
              >
                ADMIN
              </Link>
              <Link className="logout-anchor" to="/">
                <BtnLogout />
              </Link>
            </div>
<<<<<<< HEAD
          ) : null}
=======
          ) : null} */}
>>>>>>> d1bd911 (Initial commit)
        </div>
        <BtnBookNow customLink={''} />
        <BtnInstagram />
        <div className="hamburger">
          <div className={`${hamburgerClass}-btn`} onClick={animateHamburger}>
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div>
          <div className={`${hamburgerClass}`}>
            <ul>
              <Link to="./about-me" onClick={animateHamburger}>
                <li>ABOUT</li>
              </Link>
              <Link to="./services" onClick={animateHamburger}>
                <li>SERVICES</li>
              </Link>
<<<<<<< HEAD
              <Link to="./portfolio" onClick={animateHamburger}>
=======
              <Link to="./join-page" onClick={animateHamburger}>  {/* Updated path */}
>>>>>>> d1bd911 (Initial commit)
                <li>PORTFOLIO</li>
              </Link>
              <Link to="./faq" onClick={animateHamburger}>
                <li>FAQ</li>
              </Link>
              <Link to="./contact" onClick={animateHamburger}>
                <li>CONTACT</li>
              </Link>
<<<<<<< HEAD
              <div className={'book-insta-container'}>
                <BtnBookNow />
                <BtnInstagram />
              </div>
              {token ? (
=======
              <div className="book-insta-container">
                <BtnBookNow />
                <BtnInstagram />
              </div>
              {/* {token ? (
>>>>>>> d1bd911 (Initial commit)
                <>
                  <Link to="./admin" onClick={animateHamburger}>
                    <li>ADMIN</li>
                  </Link>
                  <Link to="/">
                    <BtnLogout />
                  </Link>
                </>
<<<<<<< HEAD
              ) : null}
=======
              ) : null} */}
>>>>>>> d1bd911 (Initial commit)
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
