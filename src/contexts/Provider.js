import { useMemo, useState, useEffect } from 'react';
import Context from './context';
export default function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState('eng');

  useEffect(() => {}, [showModal, language]);

  const providerValue = useMemo(() => {
    return {
      showModal,
      setShowModal,
      language,
      setLanguage,
    };
  }, [showModal, language]);
  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
