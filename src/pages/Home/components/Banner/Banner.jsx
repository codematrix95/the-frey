import { useEffect, useRef, useState } from 'react';

import spearFish from './js/variables/spearFish';
import janus from './js/variables/janus';
import cantigny from './js/variables/cantigny';

import './banner.css';

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
        const animationStart = async (ref) => {
            return new Promise((resolve) =>
                ref.current.addEventListener('animationend', resolve, {
                    once: true,
                })
            );
        };

        const runAnimation = async (anim, animFunc) => {
            for (const [i, ref] of animateRef.entries()) {
                if (ref?.current) {
                    ref.current.classList.add(anim);
                    i > 0 ? await animFunc(ref) : false;
                }
            }
        };

        const nextSlide = async () => {
            const ref = animateRef.at(-1).current;

            if (ref.classList.contains('slide-fade-out')) {
                setSlide((i + 1) % brands.length);
                animateRef.forEach((ref) => {
                    ref.current.classList.remove(
                        'slide-fade-in',
                        'slide-fade-out'
                    );
                });
            }
        };

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const startSlide = async () => {
            await runAnimation('slide-fade-in', animationStart);
            await delay(2000);
            await runAnimation('slide-fade-out', animationStart);
            await nextSlide();
        };

        startSlide();
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
                    Brands Through Exceptional Design
                </h2>
                <div className="d-flex justify-content-center col-12">
                    <div className="rotating-imgs-grid">
                        <img
                            ref={desktopImg}
                            src={brands[i][1]}
                            alt="Spearfish Mountain ranch website landing page"
                            className="main-img"
                        />
                        <img
                            ref={mobileImg}
                            src={brands[i][2]}
                            alt=""
                            className="stack-img img-1"
                        />
                        <img
                            ref={mobileMenuImg}
                            src={brands[i][3]}
                            alt=""
                            className="stack-img img-2"
                        />
                        <img
                            ref={shopModuleImg}
                            src={brands[i][4]}
                            alt=""
                            className="stack-img img-3"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
