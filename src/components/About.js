import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import technologies from './technologies';

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

                    <div className="col-lg-12 about-card mt-4">
                        <h3 className="font-weight-light">{translations.resumeSection.languages.title}</h3>
                        <span className="line mb-3"></span>
                        <ul className="list-unstyled">
                            {translations.resumeSection.languages.skills.map((lang, index) => (
                                <li key={index} className="mb-3">
                                    <strong>{lang.name}</strong> - {lang.level} ({lang.percentage})
                                    <div className="progress mt-2" style={{ height: '5x' }}>
                                        <div className="progress-bar bg-primary" role="progressbar"
                                            style={{ width: lang.percentage }}
                                            aria-valuenow={parseInt(lang.percentage)}
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
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

                    <div id='technologies' className="row about-section mt-5">
                        <div className="col-lg-12 about-card text-center">
                            <h3 className="font-weight-light">{translations.contactSection.technologiesSection.title}</h3>
                            <span className="line mb-5"></span>
                            <div className="d-flex justify-content-center flex-wrap">
                                {technologies.map((tech, index) => (
                                    <div key={index} className="tech-icon mx-3 text-center">
                                        {tech.icon}
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
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
