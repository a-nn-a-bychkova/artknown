import { useEffect, useContext } from 'react';
import Navigation from '../Navigation';
import s from './AppBar.module.css';
import LanguageBtn from '../LanguageBtn';
import Context from '../../contexts/context';

export default function AppBar() {
  const { showModal } = useContext(Context);
  useEffect(() => {
    console.log('showModal in APpBar', showModal);
  }, []);
  return (
    <header className={s.Header}>
      <Navigation />

      <div className={s.ButtonContainer}>
        <LanguageBtn text="ENG" />
        <LanguageBtn text="УКР" />
      </div>
    </header>
  );
}
