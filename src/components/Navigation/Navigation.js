import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import MenuBtn from '../MenuBtn';
import Logo from '../../images/Logo-artknown-1.svg';
import Context from '../../contexts/context';

const Navigation = props => {
  const { language, setLanguage } = useContext(Context);
  useEffect(() => {
    // console.log('language Navigation', language);
  }, []);

  return (
    <nav className={s.Nav}>
      <NavLink to="/" exact className={s.LinkLogo}>
        <img src={Logo} alt="ARTKNOWN UNTIST" className={s.Logo} />
      </NavLink>
      <MenuBtn className={s.MenuBtn} />
      <NavLink to="/events" exact className={s.Link}>
        {language === 'eng' && <span className={s.Text}>Events</span>}
        {language === 'ukr' && <span className={s.TextUkr}>Події</span>}
      </NavLink>
      <NavLink to="/news" exact className={s.Link}>
        {language === 'eng' && <span className={s.Text}>News</span>}
        {language === 'ukr' && <span className={s.TextUkr}>Новини</span>}
      </NavLink>
      <NavLink to="/video" exact className={s.Link}>
        {language === 'eng' && <span className={s.Text}>Videos</span>}
        {language === 'ukr' && <span className={s.TextUkr}>Відео</span>}
      </NavLink>
      <NavLink to="/gallery" exact className={s.Link}>
        {language === 'eng' && <span className={s.Text}>Gallery</span>}
        {language === 'ukr' && <span className={s.TextUkr}>Галерея</span>}
      </NavLink>
      <NavLink to="/contact-info" exact className={s.Link}>
        {language === 'eng' && <span className={s.Text}>Contacts</span>}
        {language === 'ukr' && <span className={s.TextUkr}>Контакти</span>}
      </NavLink>
    </nav>
  );

  //   return (
  //     <nav className={s.nav}>
  //       <NavLink to="/" exact className={s.LinkLogo}>
  //         <img src={Logo} alt="ARTKNOWN UNTIST" className={s.Logo} />
  //       </NavLink>
  //       <MenuBtn className={s.MenuBtn} />
  //       <NavLink to="/events" exact className={s.Link}>
  //         <span className={s.Text}>Події</span>
  //       </NavLink>
  //       <NavLink to="/video" exact className={s.Link}>
  //         <span className={s.Text}>Відео</span>
  //       </NavLink>
  //       <NavLink to="/gallery" exact className={s.Link}>
  //         <span className={s.Text}>Галерея</span>
  //       </NavLink>
  //       <NavLink to="/contact-info" exact className={s.Link}>
  //         <span className={s.Text}>Контакти</span>
  //       </NavLink>
  //       <LanguageBtn text="ENG" />
  //       <LanguageBtn text="UKR" />
  //     </nav>
  //   );
  // }
};

export default Navigation;
