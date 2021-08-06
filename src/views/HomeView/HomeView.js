import { useEffect, useContext } from 'react';
import Container from '../../components/Container';
import s from './HomeView.module.css';
import artknown from '../../images/artknown.jpg';
import Eugene from '../../images/Eugene.jpg';
import Context from '../../contexts/context';

export default function HomeView(props) {
  const { language } = useContext(Context);
  useEffect(() => {
    // console.log('HomeView language', language);
  }, []);
  return (
    <Container>
      {/* <h1 className={s.Name}>ARTKNOWN UNTIST</h1> */}
      <img src={artknown} alt="ARTKNOWN UNTIST" className={s.Hero} />
      {language === 'eng' && <h1 className={s.ListName}>Members</h1>}
      {language === 'ukr' && <h1 className={s.ListName}>Команда</h1>}
      <ul className={s.Ul}>
        <li className={s.Li}>
          <div className={s.MemberCard}>
            <img src={Eugene} alt="Eugene" className={s.MemberImg} />
            <div className={s.NameContainer}>
              {language === 'eng' && (
                <h2 className={s.MemberName}>
                  Eugene Yakovenko (vocal, guitar)
                </h2>
              )}
              {language === 'ukr' && (
                <h2 className={s.MemberName}>Євген Яковенко (вокал, гітара)</h2>
              )}
            </div>
          </div>
        </li>
        <li className={s.Li}>
          <div className={s.MemberCard}>
            <img src={Eugene} alt="Eugene" className={s.MemberImg} />
            <div className={s.NameContainer}>
              {language === 'eng' && (
                <h2 className={s.MemberName}>
                  Eugene Yakovenko (vocal, guitar)
                </h2>
              )}
              {language === 'ukr' && (
                <h2 className={s.MemberName}>Євген Яковенко (вокал, гітара)</h2>
              )}
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
}
