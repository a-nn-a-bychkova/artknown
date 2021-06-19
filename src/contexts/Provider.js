import { useMemo, useState, useEffect } from 'react';
import Context from './context';
export default function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  const providerValue = useMemo(() => {
    return {
      showModal,
      setShowModal,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
