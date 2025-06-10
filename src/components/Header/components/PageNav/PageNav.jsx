import { Link } from 'react-router-dom';
import './scss/index.scss';

const PageNav = ({state, anim}) => {
    const classMap = [
        [''],
        ['page-nav-slide-in', 'page-nav-slide-in page-nav-slide-out'],
    ];

    return (
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
    );
};

export default PageNav;
