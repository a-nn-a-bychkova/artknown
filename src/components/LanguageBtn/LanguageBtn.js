import { useContext, useEffect, useState } from 'react';
import Context from '../../contexts/context';
import s from './LanguageBtn.module.css';

export default function LanguageBtn(props) {
  const { language, setLanguage } = useContext(Context);
  const changeLanguage = e => {
    if (e.target.innerText === 'ENG') {
      setLanguage('eng');
    } else if (e.target.innerText === 'УКР') {
      setLanguage('ukr');
    }
  };
  useEffect(() => {
    // console.log(language, 'language');
  }, [setLanguage]);

  return (
    <div onClick={changeLanguage} className={s.Button}>
      {props.text}
    </div>
  );
}
