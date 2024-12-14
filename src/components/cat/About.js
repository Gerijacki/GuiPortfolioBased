import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Qui soc?</h3>
                    <p className="mt-20">
                        Hola! Sóc un jove apassionat per la tecnologia, sempre encuriosit per entendre com funcionen les coses i amb una gran afició per tot el que envolta la informàtica. Des de ben petit, m'ha encantat explorar, desmuntar i crear. Aquesta curiositat m'ha portat a especialitzar-me en la creació web, la programació i la ciberseguretat, camps en què puc canalitzar tant la meva creativitat com el meu interès per oferir solucions segures i efectives.
                        <br />
                    </p>
                    <p className="mt-20">
                        M'agrada implicar-me al màxim en cada projecte, des del concepte inicial fins a la seva implementació final, assegurant-me que cada detall funcioni a la perfecció i sigui segur. Sempre que em trobo amb un repte tecnològic, el veig com una oportunitat per créixer i posar a prova les meves habilitats.
                        <br />
                    </p>
                    <p className="mt-20">
                        Amb una mentalitat de millora contínua, estic constantment buscant formes d'innovar i d'estar al dia amb les últimes tendències tecnològiques. Crec que cada projecte és una oportunitat d’aprenentatge i un reflex del meu compromís i passió per la tecnologia.
                        <br />
                    </p>
                </div>

                <div id='contact' className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Informació Personal i Contacte</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Data de naixement</span> : 12/12/2005</li>
                        <li><span>Email</span> : gerijackidev@gmail.com</li>
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
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Serveis</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Disseny Web</h6>
                            <p className="subtitle">Wordpress / Html / Css / PHP / Laravel</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Gestió de servidors</h6>
                            <p className="subtitle">Gestió de xarxes d'ordinadors en entorns empresarials.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Aplicacions Ofimàtiques</h6>
                            <p className="subtitle">Word, Excel, PowerPoint, Xarxes Socials, etc.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
