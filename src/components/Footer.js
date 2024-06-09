import React from 'react';

const Footer = () => {
    return (
        <footer class="footer py-3">
            <div class="container">
                <p class="small mb-0 text-light">
                    &copy;
                    <script>document.write(new Date().getFullYear())</script> Created With <i
                        class="ti-heart text-danger"></i> By <a href="https://gerijacki.github.io" target="_blank"><span
                            class="text-danger" title="Bootstrap 4 Themes and Dashboards">Gerijacki</span></a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
