import s from './EventsView.module.css';
import schoolpubImage from '../../images/posters/2021-05-28-schoolpub.jpg';
import fazendaImage from '../../images/posters/2021-05-01-fazenda.jpg';
import heisenbergImage from '../../images/posters/2021-02-14-heisenberg.jpg';
import artAreaImage from '../../images/posters/2022-10-18-2-art-area.jpg';
import { useEffect, useState } from 'react';
import ModalView from '../ModalView';
const eventsPosters = [
  {
    id: '1',
    text: 'Art Area 18.10.2022',
    img: artAreaImage,
    big: true,
    width: '900px',
    height: '300px',
  },
  {
    id: '2',
    text: 'School Pub 28.05.2021',
    img: schoolpubImage,
    big: false,
    width: '500px',
    height: '300px',
  },
  {
    id: '3',
    text: 'Fazenda 01.05.2021',
    img: fazendaImage,
    big: false,
    width: '300px',
    height: '300px',
  },
  {
    id: '4',
    text: 'Heisenberg 14.02.2021',
    img: heisenbergImage,
    big: false,
    width: '350px',
    height: '300px',
  },
];

export default function EventsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState();
  useEffect(() => {
    document.addEventListener('click', onClickOpenModal);
    return () => {
      document.removeEventListener('click', onClickOpenModal);
    };
  }, []);
  const onClickOpenModal = event => {
    if (event.target.nodeName === 'IMG') {
      setSelectedPicture(
        eventsPosters.find(post => post.text === event.target.alt),
      );
      event.target.alt && setIsModalOpen(prev => !prev);
    }
    if (
      event.target.nodeName !== 'IMG' &&
      event.target.nodeName !== 'svg' &&
      event.target.nodeName !== 'line'
    ) {
      setIsModalOpen(prev => !prev);
    }
  };

  return (
    <div>
      {eventsPosters && (
        <ul className={s.ul}>
          {eventsPosters.map(poster => {
            return (
              <li key={poster.id} className={poster.big ? s.liImageBig : s.li}>
                <img
                  src={poster.img}
                  alt={poster.text}
                  className={poster.big ? s.liImageBig : s.Image}
                />
              </li>
            );
          })}
        </ul>
      )}
      {isModalOpen && (
        <ModalView
          selectedPicture={selectedPicture}
          postsList={eventsPosters}
          setIsModalOpen={setIsModalOpen}
          setSelectedPicture={setSelectedPicture}
        />
      )}
    </div>
  );
}
