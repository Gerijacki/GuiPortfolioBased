import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { lang } = useParams();
  const [language, setLanguage] = useState(lang || 'cat'); // cat default
  const [translations, setTranslations] = useState({});
  
  useEffect(() => {
    const loadTranslations = async (language) => {
      try {
        const response = await fetch(`/locales/${language}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error cargando las traducciones:', error);
      }
    };

    loadTranslations(language);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    window.history.pushState({}, '', `/${newLanguage}`);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

