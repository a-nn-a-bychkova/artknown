import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../../components/Container';
import s from './ContactsInfoView.module.css';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'react-feather';
import { Icon } from '@iconify/react';
import soundcloudIcon from '@iconify-icons/mdi/soundcloud';
import Context from '../../contexts/context';

function ContactsInfoView(props) {
  const { language } = useContext(Context);
  const shouldShowH1 = props.location.pathname === '/contact-info';
  return (
    <Container>
      {shouldShowH1 && language === 'eng' && (
        <h1 className={s.Name}>Contacts</h1>
      )}
      {shouldShowH1 && language === 'ukr' && (
        <h1 className={s.Name}>Контакти</h1>
      )}
      <div className={s.ContactsContainer}>
        <a href="mailto:artknownuntist@gmail.com" className={s.ContactsLink}>
          <Mail className={s.ContactsIcon} />
          artknownuntist@gmail.com
        </a>
        <a href="tel:+380995668767" className={s.ContactsLink}>
          <Phone className={s.ContactsIcon} />
          +38(099)5668767
        </a>
      </div>
      <ul className={s.ul}>
        <li className={s.li}>
          <a href="https://www.instagram.com/artknownuntist/?utm_medium=copy_link">
            <Instagram className={s.Icon} />
          </a>
        </li>
        <li className={s.li}>
          <Facebook className={s.Icon} />
        </li>

        <li className={s.li}>
          <a href="https://youtube.com/channel/UCr-gXA_l6iFG-njz-ZghNhA">
            <Youtube className={s.Icon} />
          </a>
        </li>
        <li className={s.li}>
          <a href="https://soundcloud.com/artknown-untist">
            <Icon icon={soundcloudIcon} color="grey" width="24" height="24" />
          </a>
        </li>
      </ul>
    </Container>
  );
}
export default withRouter(ContactsInfoView);
