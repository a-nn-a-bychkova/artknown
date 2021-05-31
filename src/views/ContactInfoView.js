import Container from '../components/Container';
import s from './Views.module.css';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'react-feather';

export default function ContactInfoView() {
  return (
    <Container>
      <h1 className={s.Name}>Social-media</h1>
      <ul>
        <li className={s.li}>
          <a href="https://www.instagram.com/artknownuntist/?utm_medium=copy_link">
            <Instagram className={s.Icon} />
          </a>
        </li>
        {/* <li className={s.li}>
          <Facebook />
        </li> */}

        <li className={s.li}>
          <a href="https://youtube.com/channel/UCr-gXA_l6iFG-njz-ZghNhA">
            <Youtube className={s.Icon} />
          </a>
        </li>
      </ul>
      <div className={s.ContactsContainer}>
        <a href="mailto:artknownuntist@gmail.com" className={s.Contacts}>
          <Mail className={s.ContactsIcon} />
          artknownuntist@gmail.com
        </a>
        <a href="tel:+380995668767" className={s.Contacts}>
          <Phone className={s.ContactsIcon} />
          +38(099)5668767
        </a>
      </div>
    </Container>
  );
}
