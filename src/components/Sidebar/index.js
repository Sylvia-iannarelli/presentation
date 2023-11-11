import './styles.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faUser, faEnvelope, faSuitcase, faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoS from '../../assets/images/Logo-S-1.svg';
import LogoSylvia from '../../assets/images/Logo-Sylvia.png';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSylvia} alt="Sylvia" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          onClick={() => setShowNav(false)}
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#e8c289"
          size="3x"
          className='close-icon'
          />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sylvia-iannarelli/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sylvia-iannarelli"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#e8c289"
        size="3x"
        className='hamburger-icon'
      />
    </div>
  );
};

export default Sidebar;
