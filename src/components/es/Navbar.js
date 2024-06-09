import React from 'react';

const Navbar = () => {
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
                            <a href="#home" className="nav-link">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link">Conocimientos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projectes" className="nav-link">Proyectos</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav brand">
                        <img src="/imgs/avatar.jpg" alt="" className="brand-img" />
                        <li className="brand-txt">
                            <h5 className="brand-title">Gerard Loriz</h5>
                            <div className="brand-subtitle">Diseñador Web | Técnico informático</div>
                        </li>
                    </ul>
                    <ul>
                        <select id="languageSelect">
                            <option value="ca">Català</option>
                            <option value="es" selected>Español</option>
                            <option value="en">English</option>
                        </select>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
    
    export default Navbar;