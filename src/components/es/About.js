import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">¿Quién soy?</h3>
                    <p className="mt-20">
                        ¡Hola! Soy un joven apasionado por la tecnología, siempre curioso por entender cómo funcionan las cosas y con una gran afición por todo lo relacionado con la informática. Desde pequeño, me ha encantado explorar, desmontar y crear. Esta curiosidad me ha llevado a especializarme en desarrollo web, programación y ciberseguridad, campos en los que puedo canalizar tanto mi creatividad como mi interés en ofrecer soluciones seguras y efectivas.
                        <br />
                    </p>
                    <p className="mt-20">
                        Me gusta implicarme al máximo en cada proyecto, desde el concepto inicial hasta su implementación final, asegurándome de que cada detalle funcione a la perfección y sea seguro. Siempre que encuentro un reto tecnológico, lo veo como una oportunidad para crecer y poner a prueba mis habilidades.
                        <br />
                    </p>
                    <p className="mt-20">
                        Con una mentalidad de mejora continua, siempre busco formas de innovar y de mantenerme al día con las últimas tendencias tecnológicas. Creo que cada proyecto es una oportunidad de aprendizaje y un reflejo de mi compromiso y pasión por la tecnología.
                        <br />
                    </p>
                </div>

                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Información Personal y Contacto</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Fecha de nacimiento</span> : 12/12/2005</li>
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
                    <h3 className="font-weight-light">Servicios</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Diseño Web</h6>
                            <p className="subtitle">WordPress / HTML / CSS / PHP / Laravel</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Gestión de servidores</h6>
                            <p className="subtitle">Gestión de redes de ordenadores en entornos empresariales.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Aplicaciones Ofimáticas</h6>
                            <p className="subtitle">Word, Excel, PowerPoint, Redes Sociales, etc.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
