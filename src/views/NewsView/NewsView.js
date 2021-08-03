import { useEffect } from 'react';
import newsUkr from '../../db.json';
import s from './NewsView.module.css';

export default function NewsView() {
  useEffect(() => {
    console.log('news db', newsUkr);
  }, []);
  return (
    <ul className={s.List}>
      {newsUkr.map(({ id, name, date }) => (
        <li key={id} className={s.Item}>
          <p>
            {date} : {name}
          </p>
        </li>
      ))}
    </ul>
  );
}
