import { useEffect, useRef, useState } from 'react';

import spearFish from './js/brands/spearFish.js';
import janus from './js/brands/janus.js';
import cantigny from './js/brands/cantigny.js';

import slideAnimation from './js/helpers/slideAnimation/slideAnimation.js';

import './scss/index.scss';

const GrowingBrandsBanner = () => {
    const ref = useRef({
        name: null,
        desktopImg: null,
        mobileImg: null,
        mobileMenuImg: null,
        shopModuleImg: null,
    });

    const setRef = (key) => (e) => (ref.current[key] = e);
    const [slide, setSlide] = useState(0);
    const brand = [spearFish, janus, cantigny];

    useEffect(() => {
        slideAnimation(slide, ref, setSlide, brand);
    }, [slide]);

    return (
        <>
            <div className="d-flex flex-column flex-md-row my-2 mx-2 px-3 mx-lg-3 px-lg-4">
                <h2 className="ms-md-auto text-nowrap maitree-regular text-white lh-base">
                    Growing{' '}
                    <span className="sr-only text-wrap">
                        Healthcare, CRE, and Nonprofit
                    </span>{' '}
                    <span
                        ref={setRef('name')}
                        data-text={brand[slide].name}
                        aria-hidden="true"
                        className="rotating-text"
                    ></span>
                    <br />
                    Brands Through
                    <br />
                    Exceptional <span className="pe-4">Design</span>
                </h2>
                <div className="d-flex justify-content-center mb-4 me-md-auto">
                    <div className="rotating-imgs-grid">
                        <img
                            ref={setRef('desktopImg')}
                            src={brand[slide].desktopImg}
                            alt="Desktop web design by Frey Design Group"
                            className="desktop-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={setRef('mobileImg')}
                            src={brand[slide].mobileImg}
                            alt="Mobile web design by Frey Design Group"
                            className="mobile-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={setRef('mobileMenuImg')}
                            src={brand[slide].mobileMenuImg}
                            alt="Mobile menu web design by Frey Design Group"
                            className="mobile-menu-img"
                            fetchPriority="high"
                        />
                        <img
                            ref={setRef('shopModuleImg')}
                            src={brand[slide].shopModuleImg}
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

export default GrowingBrandsBanner;
