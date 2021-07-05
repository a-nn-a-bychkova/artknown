import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../contexts/context';
import s from './Modal.module.css';

export default function Modal() {
  const { setShowModal, showModal, language } = useContext(Context);
  const styles = {
    nav: {
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingRight: '15px',
    },
    link: {
      // display: 'none',
      fontFamily: 'Big Shoulders Display',
      fontWeight: '700',
      textDecoration: 'none',
      textTransform: 'uppercase',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
      ':hover': { color: '#008080' },
    },
    activeLink: {
      color: '#008080',
    },
  };
  const toggleModal = e => {
    console.log(showModal);
    setShowModal(!showModal);
  };
  return (
    <div className={s.ModalMenu}>
      <nav style={styles.nav}>
        <NavLink
          to="/events"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
          onClick={toggleModal}
        >
          <span className={s.Text}>Events</span>
        </NavLink>
        <NavLink
          to="/video"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
          onClick={toggleModal}
        >
          <span className={s.Text}>Videos</span>
        </NavLink>
        <NavLink
          to="/gallery"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
          onClick={toggleModal}
        >
          <span className={s.Text}>Gallery</span>
        </NavLink>
        <NavLink
          to="/contact-info"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
          onClick={toggleModal}
        >
          <span className={s.Text}>Contacts</span>
        </NavLink>
      </nav>
    </div>
  );
}
