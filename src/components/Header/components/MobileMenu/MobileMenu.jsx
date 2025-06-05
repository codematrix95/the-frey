import { useState } from 'react';
import './scss/index.scss'

const MobileMenu = () => {
    const [state, setState] = useState(0);
    const [anim, setAnim] = useState(0);
    const [canClick, setCanClick] = useState(true);

    const classMap = [
        ['mobile-menu'],
        [
            'mobile-menu mobile-menu-open',
            'mobile-menu mobile-menu-open mobile-menu-close',
        ],
    ];

    const click = () => {
        if (!canClick) return;
        if (!anim) setAnim(1);
        setState((prev) => (prev + 1) % classMap[anim].length); 
    };

    const animStart = () => {
        setCanClick(false);
    };

    const animEnd = () => {
        setCanClick(true);
    };

    return (
        <div
            className={classMap[anim][state]}
            onClick={click}
            onAnimationStart={animStart}
            onAnimationEnd={animEnd}
        ></div>
    );
};

export default MobileMenu;
