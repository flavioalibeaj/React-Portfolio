import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoF from '../../assets/images/logo1-no-background.png'
import LogoSubtitle from '../../assets/images/logo-no-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoF} alt="logo"></img>
      <img className="sub-logo" src={LogoSubtitle} alt="flavio"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} style={{ color: '#4d4d4e' }} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} style={{ color: '#4d4d4e' }} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#4d4d4e' }} />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/flavio-alibeaj/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/flavioalibeaj"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar