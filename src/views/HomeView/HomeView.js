import { useEffect, useContext } from 'react';
import Container from '../../components/Container';
import s from './HomeView.module.css';

import gene from '../../images/gene-with-guitar.jpg';
import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';

export default function HomeView(props) {
  const { language } = useContext(Context);
  useEffect(() => {
    // console.log('HomeView language', language);
  }, []);
  return (
    <Container>
      {/* <h1 className={s.Name}>ARTKNOWN UNTIST</h1> */}
      <img src={gene} alt="ARTKNOWN UNTIST" className={s.Hero} />
    </Container>
  );
}
