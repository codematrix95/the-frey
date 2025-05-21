import { useEffect, useRef, useState } from 'react';
import './banner.css';

const Banner = () => {
    const creMainImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/01_Home.jpg';
    const healthCareMainImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/01_Home-1.jpg';
    const nonProfitMainImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-Homepage-Design.jpg';
    const industryMainImg = [creMainImg, healthCareMainImg, nonProfitMainImg];

    const creSmallerImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/02_Home.jpg';
    const healthCareSmallerImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/02_Home-3.jpg';
    const nonProfitSmallerImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-CTA-Module-Section.jpg';

    const industrySmallerImg = [
        creSmallerImg,
        healthCareSmallerImg,
        nonProfitSmallerImg,
    ];

    const creSmallImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/04-Home.jpg';
    const healthCareSmallImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/04_Home-1.jpg';
    const nonProfitSmallImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-Social-Media-Widget.jpg';

    const industrySmallImg = [
        creSmallImg,
        healthCareSmallImg,
        nonProfitSmallImg,
    ];

    const creSmallestImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/03-Home-1.jpg';

    const healthCareSmallestImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2021/10/03_Home-1.jpg';

    const nonProfitSmallestImg =
        'https://freywebpro.wpenginepowered.com/wp-content/uploads/2019/12/Cantigny-Shop-Module.jpg';

    const industrySmallestImg = [
        creSmallestImg,
        healthCareSmallestImg,
        nonProfitSmallestImg,
    ];

    const industryText = ['CRE', 'Healthcare', 'Nonprofit'];

    const rotatingText = useRef(null);
    const rotatingMainImg = useRef(null);
    const rotatingSmallerImg = useRef(null);
    const rotatingSmallImg = useRef(null);
    const rotatingSmallestImg = useRef(null);

    const animateElement = [
        rotatingText,
        rotatingMainImg,
        rotatingSmallerImg,
        rotatingSmallImg,
        rotatingSmallestImg,
    ];

    const [i, setSlide] = useState(0);

    useEffect(() => {
        const animationStart = async (ref) => {
            return new Promise((resolve) =>
                ref.current.addEventListener('animationend', resolve, {
                    once: true,
                })
            );
        };

        const runAnimation = async (anim, animFunc) => {
            for (const [i, ref] of animateElement.entries()) {
                if (ref?.current) {
                    ref.current.classList.add(anim);
                    i > 0 ? await animFunc(ref) : false;
                }
            }
        };

        const nextSlide = async () => {
            const ref = animateElement.at(-1).current;

            if (ref.classList.contains('slide-fade-out')) {
                setSlide((i + 1) % industryText.length);
                animateElement.forEach((ref) => {
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
                        aria-hidden="true"
                        className="rotating-text"
                        // className="rotating-text"
                        data-text={industryText[i]}
                        ref={rotatingText}
                    ></span>
                    <br />
                    Brands Through Exceptional Design
                </h2>
                <div className="d-flex justify-content-center col-12">
                    <div className="rotating-imgs-grid">
                        <img
                            ref={rotatingMainImg}
                            src={industryMainImg[i]}
                            alt="Spearfish Mountain ranch website landing page"
                            className="main-img"
                        />
                        <img
                            ref={rotatingSmallerImg}
                            src={industrySmallerImg[i]}
                            alt=""
                            className="stack-img img-1"
                        />
                        <img
                            ref={rotatingSmallImg}
                            src={industrySmallImg[i]}
                            alt=""
                            className="stack-img img-2"
                        />
                        <img
                            ref={rotatingSmallestImg}
                            src={industrySmallestImg[i]}
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
