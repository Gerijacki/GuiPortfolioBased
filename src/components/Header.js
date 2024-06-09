import React from 'react';

const Header = () => {
  return (
    <header class="header" id="home">
        <div class="container">
            <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link text-light"
                        href="https://x.com/byjacki12?t=8xClF2LnxDgyy8-hA3rsKQ&s=09"><i class="ti-twitter"
                            aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="https://www.instagram.com/byjacki12/"><i
                            class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="https://github.com/Gerijacki"><i
                            class="ti-github" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="https://tryhackme.com/p/F1ch3u5"><i
                            class="ti-envelope" aria-hidden="true"></i></a></li>
            </ul>
            <div class="header-content">
                <h4 class="header-subtitle">Hola, soc en</h4>
                <h1 class="header-title">Gerard Loriz</h1>
                <h6 class="header-mono">Tècnic superior en aplicacions multiplataforma</h6>
            </div>
        </div>
    </header>
  );
}

export default Header;
