import { useState } from 'react';
import './Test.scss';

const Test = () => {
    const [state, setState] = useState(0);
    const [anim, setAnim] = useState(0);
    const [canClick, setCanClick] = useState(true);

    const classMap = [['box'], ['box anim-start', 'box anim-start anim-end']];

    const click = () => {
        if (!canClick) return;
        if (anim !== 1) setAnim(1);
        setState((prev) => (prev + 1) % classMap[anim].length); // cycles 0 → 1 → 2 → 0 ...
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
        >
            Click me!
        </div>
    );
};

export default Test;
