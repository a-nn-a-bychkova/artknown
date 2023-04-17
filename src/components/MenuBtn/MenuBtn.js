import { useContext } from 'react';
import Context from '../../contexts/context';
import { Menu, X } from 'react-feather';
import s from './MenuBtn.module.css';

export default function MenuBtn() {
  const { setShowModal, showModal } = useContext(Context);

  const toggleModal = e => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <X onClick={toggleModal} />
      ) : (
        <Menu className={s.Btn} onClick={toggleModal} />
      )}
    </>
  );
}
