import Container from '../components/Container';
import example from '../images/example-image.jpg';

const styles = {
  li: {
    listStyleType: 'none',
  },
};

export default function GalleryView() {
  return (
    <Container>
      <ul>
        <li style={styles.li}>
          <img src={example} alt="artknown" />
        </li>
        <li style={styles.li}>
          <img src={example} alt="artknown" />
        </li>
        <li style={styles.li}>
          <img src={example} alt="artknown" />
        </li>
        <li style={styles.li}>
          <img src={example} alt="artknown" />
        </li>
        <li style={styles.li}>
          <img src={example} alt="artknown" />
        </li>
        <li style={styles.li}>
          <img src={example} alt="artknown" />
        </li>
      </ul>
    </Container>
  );
}
