import Container from '../../components/Container';
import example from '../../images/example-image.jpg';
import s from './GalleryView.module.css';

export default function GalleryView() {
  return (
    <div>
      <ul className={s.List}>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
        <li className={s.Item}>
          <img src={example} alt="artknown" className={s.Img} />
        </li>
      </ul>
    </div>
  );
}
