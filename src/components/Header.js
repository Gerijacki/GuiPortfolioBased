import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { Breadcrumbs, Link, IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  const { language, translations, changeLanguage } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLanguageIconVisible, setIsLanguageIconVisible] = useState(true);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setAnchorEl(null);
    if (lang) changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 250;
      setIsLanguageIconVisible(window.scrollY <= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {/* Selector de idioma PC */}
        <div className="language-selector desktop-only">
          <LanguageIcon className="language-icon" />
          <Breadcrumbs aria-label="breadcrumb">
            <Link onClick={() => changeLanguage("cat")} className={language === "cat" ? "active-lang" : ""}>
              CAT
            </Link>
            <Link onClick={() => changeLanguage("es")} className={language === "es" ? "active-lang" : ""}>
              ES
            </Link>
            <Link onClick={() => changeLanguage("en")} className={language === "en" ? "active-lang" : ""}>
              EN
            </Link>
          </Breadcrumbs>
        </div>

        {/* Selector de idioma móvil */}
        <div className={`language-selector mobile-only ${isLanguageIconVisible ? '' : 'hidden'}`}>
          <IconButton onClick={handleMenuClick} className="language-menu-button">
            <LanguageIcon className="language-menu-icon" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleClose(null)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            className="language-menu"
          >
            <MenuItem onClick={() => handleClose("cat")}>CAT</MenuItem>
            <MenuItem onClick={() => handleClose("es")}>ES</MenuItem>
            <MenuItem onClick={() => handleClose("en")}>EN</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
