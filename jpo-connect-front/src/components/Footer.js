import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="text-dark" to="/">Homepage</Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/register">Register</Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com" className="me-4 text-dark" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://linkedin.com" className="me-4 text-dark" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://facebook.com" className="me-4 text-dark" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://twitter.com" className="text-dark" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 bg-light">
                © 2024 Your Company
            </div>
        </footer>
    );
};

export default Footer;
