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
                        <li><span>{translations.contactSection.info.title}</span> : {translations.contactSection.info.birthDate}</li>
                        <li><span>Email</span> : {translations.contactSection.info.email}</li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link"
                            href="https://x.com/byjacki12?t=8xClF2LnxDgyy8-hA3rsKQ&s=09"><i className="ti-twitter"
                                aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="https://www.instagram.com/byjacki12/"><i
                            className="ti-instagram" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="https://github.com/Gerijacki"><i
                            className="ti-github" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="https://tryhackme.com/p/F1ch3u5"><i
                            className="ti-envelope" aria-hidden="true"></i></a></li>
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
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>{translations.servicesSection.designName}</h6>
                            <p className="subtitle">{translations.servicesSection.designDescription}</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>{translations.servicesSection.serverName}</h6>
                            <p className="subtitle">{translations.servicesSection.serverDescription}</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>{translations.servicesSection.offNamee}</h6>
                            <p className="subtitle">{translations.servicesSection.offDescription}</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
