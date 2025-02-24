import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { lang } = useParams();
  const [language, setLanguage] = useState(lang || 'en'); // en default
  const [translations, setTranslations] = useState(() => {
    const savedTranslations = localStorage.getItem(`translations_${lang}`);
    return savedTranslations ? JSON.parse(savedTranslations) : {};
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async (language) => {
      try {
        const response = await fetch(`/locales/${language}.json`);
        const data = await response.json();
        setTranslations(data);
        localStorage.setItem(`translations_${language}`, JSON.stringify(data));
      } catch (error) {
        console.error('Error cargando las traducciones:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!translations[language]) {
      loadTranslations(language);
    } else {
      setLoading(false);
    }
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    window.history.pushState({}, '', `/${newLanguage}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};