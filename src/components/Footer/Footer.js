import s from './Footer.module.css';
import FooterView from '../../views/FooterView/FooterView';

export default function Footer() {
  return (
    <footer className={s.Footer}>
      <FooterView />
    </footer>
  );
}
