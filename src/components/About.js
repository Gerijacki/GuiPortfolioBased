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
                    <p className="mt-20">{translations.aboutSection.content1}</p>
                    <p className="mt-20">{translations.aboutSection.content2}</p>
                    <p className="mt-20">{translations.aboutSection.content3}</p>
                </div>

                <div id='contact' className="col-lg-4 about-card">
                    <h3 className="font-weight-light">{translations.contactSection.title}</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        {translations.contactSection.info.map((item, index) => (
                            <li key={index}><span>{item.label}</span>: {item.value}</li>
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
