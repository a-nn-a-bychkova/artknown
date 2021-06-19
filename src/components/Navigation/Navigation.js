import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import MenuBtn from '../MenuBtn';
import Logo from '../../images/Logo-artknown.svg';

const styles = {
  nav: {
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingRight: '15px',
  },
  link: {
    display: 'none',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    ':hover': { background: '#008080' },
  },
  linkLogo: {
    display: 'inline-block',
  },
  logo: {
    maxWidth: '200px',
  },
  activeLink: {
    color: '#008080',
  },
};

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <NavLink
        to="/"
        exact
        style={styles.linkLogo}
        activeStyle={styles.activeLink}
      >
        <img src={Logo} alt="ARTKNOWN UNTIST" style={styles.logo} />
      </NavLink>
      <MenuBtn />
      <NavLink
        to="/events"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <span className={s.Text}>Events</span>
      </NavLink>
      <NavLink
        to="/gallery"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <span className={s.Text}>Gallery</span>
      </NavLink>
      <NavLink
        to="/contact-info"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <span className={s.Text}>Contacts</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
