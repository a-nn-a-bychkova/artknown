import s from './EventsView.module.css';
import schoolpubImage from '../../images/posters/2021-05-28-schoolpub.jpg';
import fazendaImage from '../../images/posters/2021-05-01-fazenda.jpg';
import heisenbergImage from '../../images/posters/2021-02-14-heisenberg.jpg';
import artAreaImage from '../../images/posters/2022-10-18-2-art-area.jpg';

export default function EventsView() {
  const eventsPosters = [
    {
      text: 'Art Area 18.10.2022',
      img: artAreaImage,
      big: '900px',
      // width: '900px',
      // height: '300',
    },

    {
      text: 'School Pub 28.05.2021',
      img: schoolpubImage,
      // width: '500px',
      // height: '300px',
    },
    {
      text: 'Fazenda 01.05.2021',
      img: fazendaImage,
      // width: '300px',
      // height: '300px',
    },
    {
      text: 'Heisenberg 14.02.2021',
      img: heisenbergImage,
      // width: '350px',
      // height: '300px',
    },
  ];
  return (
    <div>
      {eventsPosters && (
        <ul className={s.ul}>
          {eventsPosters.map(event => {
            return (
              <>
                {event.big ? (
                  <li className={s.liImageBig} key={event.text}>
                    <img
                      src={event.img}
                      alt={event.text}
                      className={s.ImageBig}
                    />
                  </li>
                ) : (
                  <li className={s.li} key={event.text}>
                    <img src={event.img} alt={event.text} className={s.Image} />
                  </li>
                )}
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}
