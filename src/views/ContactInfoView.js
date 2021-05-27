import Container from '../components/Container';
const styles = {
  li: {
    listStyleType: 'none',
  },
};

export default function ContactInfoView() {
  return (
    <Container>
      <h1>Мы в соцсетях</h1>
      <ul>
        <li style={styles.li}>Insta</li>
        <li style={styles.li}>Facebook</li>
        <li style={styles.li}>Youtube</li>
      </ul>
      <p>
        <a href="mailto:a.a.bychkova@gmail.com">a.a.bychkova@gmail.com</a>
      </p>
      <p>
        <a href="tel:+380995668767">+38(099)5668767</a>
      </p>
    </Container>
  );
}
