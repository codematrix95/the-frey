const animationEnd = async (ref) => {
    return new Promise((resolve) =>
        ref.current.addEventListener('animationend', resolve, {
            once: true,
        })
    );
};

const slideFadeIn = async (eventListener, animateRef) => {
    for (const [i, ref] of animateRef.entries()) {
        ref.current.classList.add('slide-fade-in');
        if(i > 0) await eventListener(ref)
    }
};

const slideFadeOut = async (eventListener, animateRef) => {
    for (const [i, ref] of animateRef.entries()) {
        ref.current.classList.add('slide-fade-out');
        if (i === 4) await eventListener(ref);
    }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const nextSlide = async (i, animateRef, setSlide, brand) => {
    setSlide((i + 1) % brand.length);
    animateRef.forEach((ref) => {
        ref.current.classList.remove('slide-fade-in', 'slide-fade-out');
    });
};

const slideAnimation = async (i, animateRef, setSlide, brand) => {
    await slideFadeIn(animationEnd, animateRef);
    await delay(2000);
    await slideFadeOut(animationEnd, animateRef);
    await nextSlide(i, animateRef, setSlide, brand);
};

export default slideAnimation;
