import { useEffect, useRef, useState } from 'react';

import spearFish from './js/variables/spearFish';
import janus from './js/variables/janus';
import cantigny from './js/variables/cantigny';

import slideAnimation from './js/helpers/slideAnimation.js';

import './Banner.scss';

const Banner = () => {
    const brand = useRef(null);
    const desktopImg = useRef(null);
    const mobileImg = useRef(null);
    const mobileMenuImg = useRef(null);
    const shopModuleImg = useRef(null);

    const animateRef = [
        brand,
        desktopImg,
        mobileImg,
        mobileMenuImg,
        shopModuleImg,
    ];

    const [i, setSlide] = useState(0);
    const brands = [spearFish, janus, cantigny];

    useEffect(() => {
        slideAnimation(i, animateRef, setSlide, brands);
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
                        ref={brand}
                        data-text={brands[i][0]}
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
                            src={brands[i][1]}
                            alt="Desktop web design by Frey Design Group"
                            className="desktop-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={mobileImg}
                            src={brands[i][2]}
                            alt="Mobile web design by Frey Design Group"
                            className="mobile-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={mobileMenuImg}
                            src={brands[i][3]}
                            alt="Mobile menu web design by Frey Design Group"
                            className="mobile-menu-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={shopModuleImg}
                            src={brands[i][4]}
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
