import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';

const Navbar = () => {
  const { language, translations, changeLanguage } = useContext(LanguageContext);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Lógica para detectar la sección activa
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Lógica para cambiar idioma
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

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
      <div className="container">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavigation(e, 'home')}
              >
                {translations.home || "Home"}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
                onClick={(e) => handleNavigation(e, 'resume')}
              >
                {translations.resume || "Resume"}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projectes"
                className={`nav-link ${activeSection === 'projectes' ? 'active' : ''}`}
                onClick={(e) => handleNavigation(e, 'projectes')}
              >
                {translations.projects || "Projects"}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src="/imgs/avatar.jpg" alt="" className="brand-img" />
            <li className="brand-txt">
              <h5 className="brand-title">{translations.navbar_title || "Gerard Loriz"}</h5>
              <div className="brand-subtitle">{translations.navbar_subtitle || "Web Designer | IT Technician"}</div>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="https://terminal.gerardloriz.com/" className="nav-link">
                {translations.terminal || "Terminal"}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/gerard-loriz-pou/"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                {translations.contact || "Contact"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;