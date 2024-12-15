import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const Projects = () => {
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
        <section className="section" id="projectes">
            <div className="container">
                <h2 className="mb-5 pb-4">
                    <span className="text-danger">{translations.projectsSection.titlePrefix}</span> {translations.projectsSection.title}
                </h2>
                <div className="row">
                {translations.projectsSection.projectList.map((project, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <div className="card mb-5">
                                <div className="card-header has-icon">
                                    <i className={`ti-${project.icon} text-danger`} aria-hidden="true"></i>
                                </div>
                                <div className="card-body px-4 py-3">
                                    <h5 className="mb-3 card-title text-dark">{project.name}</h5>
                                    <p className="subtitle">
                                        {project.description}
                                        <br />
                                        <a href={project.link}>{project.linkText}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
