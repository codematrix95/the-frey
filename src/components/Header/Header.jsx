import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import Logo from './components/Logo';
import MobileMenu from './components/MobileMenu/MobileMenu';

const Header = () => {
    const [state, setState] = useState(0);
    const [anim, setAnim] = useState(0);

    const classMap = [
        [''],
        [
            'mobile-menu-slide-in',
            'mobile-menu-slide-in mobile-menu-slide-out',
        ],
    ];

    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
            >
                Skip to main content
            </a>
            <header className="d-flex mx-2 px-2 mx-lg-3 px-lg-4 gap-0 justify-content-between align-items-center roboto-regular">
                <h1 className="d-flex m-0">
                    <Link
                        to="/the-frey-build/"
                        aria-label="Go to Frey Design Group homepage"
                    >
                        <span className="sr-only">Frey Design Group</span>
                        <Logo />
                    </Link>
                </h1>
                <nav
                    aria-label="Page"
                    className={classMap[anim][state]}
                >
                    <ul className="d-flex justify-content-between align-items-end px-4 m-0 fs-4 fs-sm-6">
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
                <MobileMenu state={state} setState={setState} anim={anim} setAnim={setAnim} />
            </header>
        </>
    );
};

export default Header;
