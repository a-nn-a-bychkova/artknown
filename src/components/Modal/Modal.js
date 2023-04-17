import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Context from '../../contexts/context';
import s from './Modal.module.css';

export default function Modal() {
  const { setShowModal, showModal, language, setLanguage } =
    useContext(Context);

  const changeLanguage = e => {
    if (e.target.innerText === 'eng') {
      setLanguage('eng');
    } else if (e.target.innerText === 'укр') {
      setLanguage('ukr');
    }
  };
  const toggleModal = e => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <div className={s.ModalMenu}>
          <nav className={s.Nav}>
            <NavLink
              to="/events"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Events</span>}
              {language === 'ukr' && <span className={s.Text}>Події</span>}
            </NavLink>
            <NavLink
              to="/news"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>News</span>}
              {language === 'ukr' && <span className={s.Text}>Новини</span>}
            </NavLink>
            <NavLink
              to="/video"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Videos</span>}
              {language === 'ukr' && <span className={s.Text}>Відео</span>}
            </NavLink>
            <NavLink
              to="/gallery"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Gallery</span>}
              {language === 'ukr' && <span className={s.Text}>Галерея</span>}
            </NavLink>
            <NavLink
              to="/contact-info"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Contacts</span>}
              {language === 'ukr' && <span className={s.Text}>Контакти</span>}
            </NavLink>

            <div className={s.ButtonContainer}>
              <div
                onClick={changeLanguage}
                className={language === 'eng' ? s.ButtonActive : s.Button}
              >
                eng
              </div>
              <div
                onClick={changeLanguage}
                className={language === 'ukr' ? s.ButtonActive : s.Button}
              >
                укр
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
