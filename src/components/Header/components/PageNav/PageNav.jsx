import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './scss/index.scss';

const PageNav = ({ state, setState, anim, setAnim }) => {
    const ul = useRef(null);

    const classMap = [
        [''],
        ['page-nav-slide-in', 'page-nav-slide-in page-nav-slide-out'],
    ];

    useEffect(() => {
        if (!ul.current) return;

        const ref = ul.current;
        let prevFontSize = getComputedStyle(ref).fontSize;

        const onFontSizeChange = new ResizeObserver(() => {
            const newFontSize = getComputedStyle(ref).fontSize;
            if (newFontSize !== prevFontSize) {
                setAnim(0)
                setState(0)
            }
        });

        onFontSizeChange.observe(ref);

        return () => onFontSizeChange.disconnect();
    }, []);

    return (
        <nav
            aria-label="Page"
            className={classMap[anim][state]}
        >
            <ul
                ref={ul}
                className="d-flex justify-content-between align-items-end px-4 m-0"
            >
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
