import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I?</h3>
                    <p className="mt-20">
                        Hi! I'm a young tech enthusiast, always curious about how things work and deeply interested in everything related to computing. Since I was a kid, I've loved exploring, taking things apart, and creating. This curiosity has led me to specialize in web development, programming, and cybersecurity—fields where I can channel both my creativity and my drive to provide secure and effective solutions.
                        <br />
                    </p>
                    <p className="mt-20">
                        I like to dive fully into each project, from the initial concept to final implementation, ensuring every detail works perfectly and securely. Whenever I encounter a tech challenge, I see it as an opportunity to grow and test my skills.
                        <br />
                    </p>
                    <p className="mt-20">
                        With a mindset focused on continuous improvement, I'm always looking for ways to innovate and stay updated with the latest tech trends. I believe every project is a chance to learn and a reflection of my commitment and passion for technology.
                        <br />
                    </p>
                </div>

                <div id='contact' className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Information and Contact</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Date of Birth</span> : 12/12/2005</li>
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
                    <h3 className="font-weight-light">Services</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web Design</h6>
                            <p className="subtitle">Wordpress / Html / Css / PHP / Laravel</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Server Management</h6>
                            <p className="subtitle">Management of computer networks in business environments.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Office Applications</h6>
                            <p className="subtitle">Word, Excel, PowerPoint, Social Networks, etc.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
