import Container from '../../components/Container';
import s from './FooterView.module.css';
import ContactsViewInfo from '../ContactsInfoView';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'react-feather';
import { Icon, InlineIcon } from '@iconify/react';
import soundcloudIcon from '@iconify-icons/mdi/soundcloud';

export default function FooterView() {
  return <ContactsViewInfo />;
}

// export default function FooterView() {
//   return (
//     <div>
//       <div className={s.ContactsContainer}>
//         <a href="mailto:artknownuntist@gmail.com" className={s.ContactsLink}>
//           <Mail className={s.ContactsIcon} />
//           artknownuntist@gmail.com
//         </a>
//         <a href="tel:+380995668767" className={s.ContactsLink}>
//           <Phone className={s.ContactsIcon} />
//           +38(099)5668767
//         </a>
//       </div>
//       <ul className={s.ul}>
//         <li className={s.li}>
//           <a href="https://www.instagram.com/artknownuntist/?utm_medium=copy_link">
//             <Instagram className={s.Icon} />
//           </a>
//         </li>
//         <li className={s.li}>
//           <Facebook className={s.Icon} />
//         </li>

//         <li className={s.li}>
//           <a href="https://youtube.com/channel/UCr-gXA_l6iFG-njz-ZghNhA">
//             <Youtube className={s.Icon} />
//           </a>
//         </li>
//         <li className={s.li}>
//           <a href="https://soundcloud.com/artknown-untist">
//             <Icon icon={soundcloudIcon} color="grey" width="24" height="24" />
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }
