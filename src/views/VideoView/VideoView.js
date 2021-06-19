import Container from '../../components/Container';
import s from './VideoView.module.css';
export default function VideoView() {
  return (
    <Container>
      <ul className={s.List}>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aAEQfVt4olE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t_eti_Xyr0w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xsOoevWFVzk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tuLDSZyYUjg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/G8glVBsRit4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={s.Video}
          ></iframe>
        </li>
      </ul>
    </Container>
  );
}
