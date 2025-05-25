import { useEffect, useRef, useState } from 'react';

import spearFish from './js/brands/spearFish.js';
import janus from './js/brands/janus.js';
import cantigny from './js/brands/cantigny.js';

import slideAnimation from './js/helpers/slideAnimation.js';

import './Banner.scss';

const Banner = () => {
    const name = useRef(null);
    const desktopImg = useRef(null);
    const mobileImg = useRef(null);
    const mobileMenuImg = useRef(null);
    const shopModuleImg = useRef(null);

    const animateRef = [
        name,
        desktopImg,
        mobileImg,
        mobileMenuImg,
        shopModuleImg,
    ];

    const [i, setSlide] = useState(0);
    const brand = [spearFish, janus, cantigny];

    useEffect(() => {
        slideAnimation(i, animateRef, setSlide, brand);
    }, [i]);

    return (
        <>
            <div className="row mx-2">
                <h2>
                    Growing{' '}
                    <span className="sr-only">
                        Healthcare, CRE, and Nonprofit
                    </span>{' '}
                    <span
                        ref={name}
                        data-text={brand[i].name}
                        aria-hidden="true"
                        className="rotating-text"
                    ></span>
                    <br />
                    Brands Through
                    <br />
                    Exceptional <span className="pe-4">Design</span>
                </h2>
                <div className="d-flex justify-content-center">
                    <div className="rotating-imgs-grid">
                        <img
                            ref={desktopImg}
                            src={brand[i].desktopImg}
                            alt="Desktop web design by Frey Design Group"
                            className="desktop-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={mobileImg}
                            src={brand[i].mobileImg}
                            alt="Mobile web design by Frey Design Group"
                            className="mobile-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={mobileMenuImg}
                            src={brand[i].mobileMenuImg}
                            alt="Mobile menu web design by Frey Design Group"
                            className="mobile-menu-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={shopModuleImg}
                            src={brand[i].shopModuleImg}
                            alt="Shop module web design by Frey Design Group"
                            className="shop-module-img"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
