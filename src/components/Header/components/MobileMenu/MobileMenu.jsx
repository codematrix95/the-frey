import { useState } from 'react';
import styles from './scss/MobileMenu.module.scss';
import clsx from 'clsx';

const MobileMenu = ({ state, setState, anim, setAnim }) => {
    const [canClick, setCanClick] = useState(true);

    const classMap = [
        [''],
        [styles.open, clsx(styles.open, styles.closed)],
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
            className={clsx(styles.button, classMap[anim][state])}
            onClick={click}
            onAnimationStart={animStart}
            onAnimationEnd={animEnd}
        ></div>
    );
};

export default MobileMenu;
