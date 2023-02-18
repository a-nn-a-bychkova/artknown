import { useEffect, useContext } from 'react';
import Container from '../../components/Container';
import s from './HomeView.module.css';

import gene from '../../images/gene-with-guitar.jpg';
import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';

export default function HomeView(props) {
  const { language } = useContext(Context);

  return (
    <Container>
      <img src={gene} alt="ARTKNOWN UNTIST" className={s.Hero} />
    </Container>
  );
}
