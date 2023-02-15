import example from '../../images/photos/example-image.jpg';
import img1 from '../../images/photos/eugene.jpg';
import img2 from '../../images/photos/gene-smiling.jpg';
import img3 from '../../images/photos/gene.jpg';
import img4 from '../../images/photos/guitar.jpg';
import img5 from '../../images/photos/photo-0.jpg';
import img6 from '../../images/photos/photo-1.jpg';
import img7 from '../../images/photos/photo-2.jpg';
import img8 from '../../images/photos/photo-3.jpg';
import img9 from '../../images/photos/photo-4.jpg';
import img10 from '../../images/photos/photo-5.jpg';
import img11 from '../../images/photos/photo-6.jpg';
import img12 from '../../images/photos/photo-7.jpg';
import img13 from '../../images/photos/photo-8.jpg';
import img14 from '../../images/photos/photo-9.jpg';
import img16 from '../../images/photos/photo-11.jpg';
import img17 from '../../images/photos/photo-12.jpg';
import img18 from '../../images/photos/photo-13.jpg';
import img19 from '../../images/photos/photo-14.jpg';
import img15 from '../../images/photos/photo-15.jpg';

import s from './GalleryView.module.css';
import { useEffect, useState } from 'react';
const postsList = [
  {
    text: '1',
    img: img1,
  },
  {
    text: '2',
    img: img2,
  },
  {
    text: '3',
    img: img3,
  },
  {
    text: '4',
    img: img4,
  },
  {
    text: '5',
    img: img5,
  },
  {
    text: '6',
    img: img6,
  },
  {
    text: '7',
    img: img7,
  },
  {
    text: '8',
    img: img8,
  },
  {
    text: '9 ',
    img: img9,
  },
  {
    text: '10',
    img: img10,
  },
  {
    text: '11',
    img: img11,
  },
  {
    text: '12',
    img: img12,
  },
  {
    text: '13',
    img: img13,
  },
  {
    text: '14',
    img: img14,
  },
  {
    text: '15',
    img: img15,
  },
  {
    text: '16',
    img: img16,
  },
  {
    text: '17',
    img: img17,
  },
  {
    text: '18',
    img: img18,
  },
  {
    text: '19',
    img: img19,
  },
];
export default function GalleryView() {
  return (
    <div>
      {postsList && (
        <ul className={s.List}>
          {postsList.map(post => {
            return (
              <li className={s.Item} key={post.text}>
                <img src={post.img} alt={post.text} className={s.Img} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}