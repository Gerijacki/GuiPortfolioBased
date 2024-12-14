import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const languageSelect = document.getElementById('languageSelect');

    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
      window.location.href = selectedLanguage;
    };

    if (languageSelect) {
      languageSelect.addEventListener('change', handleLanguageChange);
    }

    return () => {
      if (languageSelect) {
        languageSelect.removeEventListener('change', handleLanguageChange);
      }
    };
  }, []);

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
              <a href="#home" className="nav-link" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => handleNavigation(e, 'about')}>About Me</a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link" onClick={(e) => handleNavigation(e, 'resume')}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src="/imgs/avatar.jpg" alt="" className="brand-img" />
            <li className="brand-txt">
              <h5 className="brand-title">Gerard Loriz</h5>
              <div className="brand-subtitle">Web Designer | IT Technician</div>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="https://termfolio-gerijacki.vercel.app/" className="nav-link">Terminal</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
