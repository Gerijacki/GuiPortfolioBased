import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const About = () => {
    const { language, translations, changeLanguage } = useContext(LanguageContext);

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
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">{translations.aboutSection.title}</h3>
                    <p className="mt-20">
                        {translations.aboutSection.content1}
                        <br />
                    </p>
                    <p className="mt-20">
                        {translations.aboutSection.content2}
                        <br />
                    </p>
                    <p className="mt-20">
                        {translations.aboutSection.content3}
                        <br />
                    </p>
                </div>

                <div id='contact' className="col-lg-4 about-card">
                    <h3 className="font-weight-light">{translations.contactSection.title}</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        {translations.contactSection.info.map((item, index) => (
                            <li key={index}>
                                <span>{item.label}</span> : {item.value}
                            </li>
                        ))}
                    </ul>
                    <ul className="social-icons pt-3">
                        {translations.contactSection.socialLinks.map((link, index) => (
                            <li key={index} className="social-item">
                                <a className="social-link" href={link.href}>
                                    <i className={link.icon} aria-hidden="true"></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-start align-items-center">
                        <h4 className="font-weight-light">{translations.resumeSection.languages.title}</h4>
                    </div>
                    <div className="card-body pb-2">
                        {translations.resumeSection.languages.skills.map((language, index) => (
                            <div key={index}>
                                <h6>{language.name} ({language.level})</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: language.percentage }}
                                        aria-valuenow={parseInt(language.percentage)} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">{translations.servicesSection.title}</h3>
                    <span className="line mb-5"></span>
                    {translations.servicesSection.services.map((service, index) => (
                        <div className="row" key={index}>
                            <div className="col-1 text-danger pt-1">
                                <i className={service.icon}></i>
                            </div>
                            <div className="col-10 ml-auto mr-3">
                                <h6>{service.name}</h6>
                                <p className="subtitle">{service.description}</p>
                                <hr />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
