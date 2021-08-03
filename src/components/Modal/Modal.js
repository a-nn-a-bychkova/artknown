import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../contexts/context';
import s from './Modal.module.css';
import LanguageBtn from '../LanguageBtn';

export default function Modal() {
  const { setShowModal, showModal, language } = useContext(Context);
  const toggleModal = e => {
    console.log(showModal);
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
              {language === 'ukr' && <span className={s.TextUkr}>Події</span>}
            </NavLink>
            <NavLink
              to="/news"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>News</span>}
              {language === 'ukr' && <span className={s.TextUkr}>Новини</span>}
            </NavLink>
            <NavLink
              to="/video"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Videos</span>}
              {language === 'ukr' && <span className={s.TextUkr}>Відео</span>}
            </NavLink>
            <NavLink
              to="/gallery"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Gallery</span>}
              {language === 'ukr' && <span className={s.TextUkr}>Галерея</span>}
            </NavLink>
            <NavLink
              to="/contact-info"
              exact
              className={s.Link}
              activeClassName={s.ActiveLink}
              onClick={toggleModal}
            >
              {language === 'eng' && <span className={s.Text}>Contacts</span>}
              {language === 'ukr' && (
                <span className={s.TextUkr}>Контакти</span>
              )}
            </NavLink>

            <div className={s.LanguageContainer}>
              <LanguageBtn text="ENG" className={s.Text} />
              <LanguageBtn text="УКР" className={s.Text} />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
