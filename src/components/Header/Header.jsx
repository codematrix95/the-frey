import { Link } from 'react-router-dom';
import './header.scss';

import Logo from './components/Logo';

const Header = () => {
    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
            >
                Skip to main content
            </a>
            <header className="d-grid m-3 p-4 gap-0 align-items-center roboto-regular">
                <h1 className="d-flex m-0">
                    <Link
                        to="/"
                        aria-label="Go to Frey Design Group homepage"
                        className="home-link"
                    >
                        <Logo />
                    </Link>
                </h1>
                <nav aria-label="Page">
                    <ul className="d-flex justify-content-between align-items-end p-0 m-0 fs-6">
                        <li>
                            <Link to="/clients">Clients</Link>
                        </li>
                        <li>
                            <Link to="/expertise">Expertise</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/careers">Careers</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
