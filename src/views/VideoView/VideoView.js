import s from './VideoView.module.css';
export default function VideoView() {
  return (
    <div>
      <ul className={s.List}>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aAEQfVt4olE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t_eti_Xyr0w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xsOoevWFVzk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tuLDSZyYUjg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={s.Video}
          ></iframe>
        </li>
        <li className={s.Item}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/G8glVBsRit4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={s.Video}
          ></iframe>
        </li>
      </ul>
    </div>
  );
}
