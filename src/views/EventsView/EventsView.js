import Container from '../../components/Container';
import s from './EventsView.module.css';
import schoolpubImage from '../../images/schoolpub-28-05-2021.jpg';
import fazendaImage from '../../images/Fazenda-1-05-2021.jpg';
import heisenbergImage from '../../images/Heisenberg-14-02-2021.jpg';

// const styles = {
//   div: {
//     display: 'block',
//     textAlign: 'center',
//   },
//   ul: {
//     maxWidth: '1200px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingTop: '20px',
//     paddingLeft: '0px',
//     paddingRight: '0px',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   li: {
//     width: 'calc((100%-50px)/3)',
//     marginRight: '15px',
//     listStyleType: 'none',
//   },
//   img: {
//     display: 'block',
//     marginRight: '15px',
//     marginTop: 'auto',
//     marginBottom: 'auto',
//   },
// };

export default function EventsView() {
  return (
    <div>
      <ul className={s.ul}>
        <li className={s.li}>
          <img
            src={schoolpubImage}
            className={s.Image}
            alt="Schoolpub 28.05.2021 poster"
          />
        </li>
        <li className={s.li}>
          <img
            src={fazendaImage}
            className={s.Image}
            alt="Fazenda 01.05.2021 poster"
          />
        </li>
        <li className={s.li}>
          <img
            src={heisenbergImage}
            className={s.Image}
            alt="Heisenberg 14.02.2021 poster"
          />
        </li>
        <li className={s.li}>
          <img
            src={heisenbergImage}
            className={s.Image}
            alt="Heisenberg 14.02.2021 poster"
          />
        </li>
        <li className={s.li}>
          <img
            src={heisenbergImage}
            className={s.Image}
            alt="Heisenberg 14.02.2021 poster"
          />
        </li>
        <li className={s.li}>
          <img
            src={heisenbergImage}
            className={s.Image}
            alt="Heisenberg 14.02.2021 poster"
          />
        </li>
      </ul>
    </div>
  );
}
