import { Link } from 'react-router-dom';
import styles from './NewLink.module.scss';
import clsx from 'clsx';

const NewLink = ({ className, goTo, ariaLabel, img, desc, srOnly }) => {
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
            aria-label={ariaLabel}
            className={clsx(styles.link, className)}
        >
            {img}
            <span>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 20 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={arrowIcon} />
                </svg>
                {desc}
                <span className="sr-only">{srOnly}</span>
            </span>
        </Link>
    );
};

export default NewLink;
