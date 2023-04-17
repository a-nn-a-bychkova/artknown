import { useContext, useEffect } from 'react';
import newsUkr from '../../db.json';
import s from './NewsView.module.css';
import Context from '../../contexts/context';

export default function NewsView() {
  const { language } = useContext(Context);

  return (
    <ul className={s.List}>
      {newsUkr.map(({ id, name, nameUkr, date, city, cityUkr }) => (
        <li key={id} className={s.Item}>
          <div>
            {date} :
            {language === 'eng' ? (
              <span>
                {name}
                {city ? <div>{city}</div> : ''}
              </span>
            ) : (
              <span>
                {nameUkr ? <span> {nameUkr}</span> : <span>{name}</span>}
                {cityUkr ? (
                  <div>{cityUkr}</div>
                ) : city ? (
                  <div>{city} </div>
                ) : (
                  ''
                )}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
