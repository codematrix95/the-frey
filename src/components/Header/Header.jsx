import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
            >
                Skip to main content
            </a>
            <header className='roboto-regular'>
                <h1>
                    <Link
                        to="/"
                        aria-label="Go to Frey Design Group homepage"
                    >
                        Frey Design Group
                    </Link>
                </h1>
                <nav>
                    <ul>
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
