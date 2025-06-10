import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import Logo from './components/Logo';
import PageNav from './components/PageNav/PageNav';
import MobileMenu from './components/MobileMenu/MobileMenu';

const Header = () => {
    const [state, setState] = useState(0);
    const [anim, setAnim] = useState(0);

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
                <PageNav
                    state={state}
                    anim={anim}
                />
                <MobileMenu
                    state={state}
                    setState={setState}
                    anim={anim}
                    setAnim={setAnim}
                />
            </header>
        </>
    );
};

export default Header;
