import { useMemo, useState, useEffect } from 'react';
import Context from './context';
export default function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState('eng');

  useEffect(() => {
    // console.log('language in Context', language);
  }, [showModal, language]);

  const providerValue = useMemo(() => {
    return {
      showModal,
      setShowModal,
      language,
      setLanguage,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, language]);
  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
