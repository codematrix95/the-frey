import { useEffect, useRef, useState } from 'react';
import './rotating-text.css';

const RotatingText = () => {
    const industry = ['Healthcare', 'CRE', 'Nonprofit'];
    const [i, setI] = useState(0);
    const rotatingText = useRef(null);

    useEffect(() => {
        const e = rotatingText.current;
        const incrementI = () => setI((i + 1) % industry.length);

        e.addEventListener('animationiteration', incrementI);
        return () => e.removeEventListener('animationiteration', incrementI);
    }, [i]);

    return (
        <h2>
            Growing{' '}
            <span className="sr-only">Healthcare, CRE, and Nonprofit</span>{' '}
            <span
                aria-hidden="true"
                className="rotating-text"
                data-text={industry[i]}
                ref={rotatingText}
            ></span>
            <br />
            Brands Through Exceptional Design
        </h2>
    );
};

export default RotatingText;
