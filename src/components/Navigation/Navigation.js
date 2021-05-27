import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Logo from '../../images/Logo-artknown.png';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#BDB76B',
  },
};

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <NavLink
        to="/home"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <img src={Logo} alt="ARTKNOWN ANTIST" />
      </NavLink>
      <NavLink
        to="/events"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <span className={s.Text}>События</span>
      </NavLink>
      <NavLink
        to="/gallery"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <span className={s.Text}>Галерея</span>
      </NavLink>
      <NavLink
        to="/contact-info"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <span className={s.Text}>Контакты</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
