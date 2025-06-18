import { Link } from 'react-router-dom';
import './PageLink.scss';

const PageLink = ({ linkClass, goTo, desc, srOnly }) => {
    const arrowIcon = [
        `M1 10`,
        'l18 0',
        'm-5 6',
        'l5 -6',
        'm-5 -6',
        'l5 6',
    ].join(' ');

    return (
        <Link
            to={goTo}
            aria-label="Go to about page"
            className={`PageLink text-decoration-none ${linkClass}`}
        >
            <div className="d-flex flex-wrap">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 20 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={arrowIcon} />
                </svg>
                {desc}
                <span className="sr-only">{srOnly}</span>
            </div>
        </Link>
    );
};

export default PageLink;
