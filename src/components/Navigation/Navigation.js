import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import MenuBtn from '../MenuBtn';
import Logo from '../../images/Logo-artknown.svg';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact className={s.LinkLogo}>
        <img src={Logo} alt="ARTKNOWN UNTIST" className={s.Logo} />
      </NavLink>
      <MenuBtn className={s.MenuBtn} />
      <NavLink to="/events" exact className={s.Link}>
        <span className={s.Text}>Events</span>
      </NavLink>
      <NavLink to="/video" exact className={s.Link}>
        <span className={s.Text}>Videos</span>
      </NavLink>
      <NavLink to="/gallery" exact className={s.Link}>
        <span className={s.Text}>Gallery</span>
      </NavLink>
      <NavLink to="/contact-info" exact className={s.Link}>
        <span className={s.Text}>Contacts</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
