const animationStart = async (ref) => {
    return new Promise((resolve) =>
        ref.current.addEventListener('animationend', resolve, {
            once: true,
        })
    );
};

const slideFadeIn = async (animFunc, animateRef) => {
    for (const [i, ref] of animateRef.entries()) {
        ref.current.classList.add('slide-fade-in');
        if(i > 0) await animFunc(ref)
    }
};

const slideFadeOut = async (animFunc, animateRef) => {
    for (const [i, ref] of animateRef.entries()) {
        ref.current.classList.add('slide-fade-out');
        if (i === 4) await animFunc(ref);
    }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const nextSlide = async (i, animateRef, setSlide, brands) => {
    setSlide((i + 1) % brands.length);
    animateRef.forEach((ref) => {
        ref.current.classList.remove('slide-fade-in', 'slide-fade-out');
    });
};

const slideAnimation = async (i, animateRef, setSlide, brands) => {
    await slideFadeIn(animationStart, animateRef);
    await delay(2000);
    await slideFadeOut(animationStart, animateRef);
    await nextSlide(i, animateRef, setSlide, brands);
};

export default slideAnimation;
