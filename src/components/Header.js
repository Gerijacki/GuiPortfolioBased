import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const Header = () => {
  const { language, translations, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    const languageSelect = document.getElementById('languageSelect');
    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
      changeLanguage(selectedLanguage);
    };

    if (languageSelect) {
      languageSelect.addEventListener('change', handleLanguageChange);
    }

    return () => {
      if (languageSelect) {
        languageSelect.removeEventListener('change', handleLanguageChange);
      }
    };
  }, [changeLanguage]);


  return (
    <header className="header" id="home">
      <div className="container">
        <ul className="social-icons pt-3">
          {translations.headerSection.socialLinks.map((link, index) => (
            <li className="social-item" key={index}>
              <a className="social-link text-light" href={link.url}>
                <i className={`ti ${link.icon}`} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>

        <div className="header-content">
          <h4 className="header-subtitle">{translations.headerSection.subtitle}</h4>
          <h1 className="header-title">{translations.headerSection.title}</h1>
          <h6 className="header-mono">{translations.headerSection.mono}</h6>
        </div>

        <div className="language-select-container">
          <select
            id="languageSelect"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="cat">Català</option>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <i className="fas fa-language"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
