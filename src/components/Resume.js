import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const Resume = () => {
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
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">{translations.resumeSection.titlePrefix}</span> {translations.resumeSection.title}</h2>
                <div className="row d-flex align-items-stretch">
                    {/* Experiència */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>{translations.resumeSection.experience.title}</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                {translations.resumeSection.experience.items.map((job, index) => (
                                    <div key={index}>
                                        <h6 className="title text-danger">{job.position} - {job.company}</h6>
                                        <p className="subtitle">{job.period}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Estudis */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>{translations.resumeSection.studies.title}</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                {translations.resumeSection.studies.items.map((study, index) => (
                                    <div key={index}>
                                        <h6 className="title text-danger">{study.title}</h6>
                                        <p className="subtitle">{study.period}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Eines */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-start align-items-center">
                                    <h4 className="mt-2">{translations.resumeSection.tools.title}</h4>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                {translations.resumeSection.tools.skills.map((tool, index) => (
                                    <div key={index}>
                                        <h6>{tool.name}</h6>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: tool.level }}
                                                aria-valuenow={parseInt(tool.level)} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Resume;
