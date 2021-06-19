import Container from '../components/Container';
import s from './Views.module.css';
import artknown from '../images/artknown.jpg';

export default function HomeView() {
  return (
    <Container className={s.HomeContainer}>
      {/* <h1 className={s.Name}>artknown untist</h1> */}
      <img src={artknown} alt="ARTKNOWN UNTIST" className={s.Hero} />
    </Container>
  );
}
