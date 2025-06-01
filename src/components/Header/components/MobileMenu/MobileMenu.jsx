import { useState, useRef, useEffect } from 'react';
import './MobileMenu.scss';

const MobileMenu = () => {
    const refs = useRef({
        mobileMenu: null,
        anim: null,
        finish: null,
    });

    const ref = refs.current;

    const [isToggled, setIsToggled] = useState('normal');

    useEffect(() => {
        const mobileMenuAnim = (isToggled) => {
            const iconBlue = '#00aeef';
            const transform = 'rotate(0deg)';
            const boxShadow = `0 0px ${iconBlue}`;

            const options = {
                duration: 500,
                fill: 'forwards',
                direction: isToggled,
            };

            const frames = [
                { transform: `${transform}`, boxShadow: `${boxShadow}` },
                { transform: `${transform}`, boxShadow: `${boxShadow}` },
            ];

            const before = [
                { transform: `${transform}`, boxShadow: `0 -8px ${iconBlue}` },
                ...frames,
                { transform: 'rotate(45deg)', boxShadow: `${boxShadow}` },
            ];

            const after = [
                { transform: `${transform}`, boxShadow: `0 8px ${iconBlue}` },
                ...frames,
                { transform: 'rotate(-45deg)', boxShadow: `${boxShadow}` },
            ];

            ref.finish = ref.mobileMenu.animate(before, {
                ...options,
                pseudoElement: '::before',
            });

            ref.mobileMenu.animate(after, {
                ...options,
                pseudoElement: '::after',
            });
        };

        ref.anim = mobileMenuAnim;
    });

    const handleClick = () => {
        ref.anim(isToggled);

        ref.finish.onfinish = () => {
            setIsToggled((prev) => (prev === 'normal' ? 'reverse' : 'normal'));
        };
    };

    return (
        <div
            ref={(e) => (ref.mobileMenu = e)}
            className="mobile-menu"
            onClick={handleClick}
        ></div>
    );
};

export default MobileMenu;
