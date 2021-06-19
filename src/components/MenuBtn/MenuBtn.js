import { useContext } from 'react';
import Context from '../../contexts/context';
import { Menu } from 'react-feather';
import s from './MenuBtn.module.css';

export default function MenuBtn() {
  const { setShowModal, showModal } = useContext(Context);

  const toggleModal = e => {
    console.log(showModal);
    setShowModal(!showModal);
  };
  return <Menu className={s.Btn} onClick={toggleModal} />;
}
