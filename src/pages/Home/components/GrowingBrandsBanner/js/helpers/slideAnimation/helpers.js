export const animationEnd = async (e) => {
    return new Promise((resolve) =>
        e.addEventListener('animationend', resolve, {
            once: true,
        })
    );
};

export const slideFadeIn = async (event, animateRef) => {
    for (const [key, e] of animateRef) {
        e?.classList.add('slide-fade-in');
        if (key !== 'name') await event(e);
    }
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const slideFadeOut = async (event, animateRef) => {
    for (const [key, e] of animateRef) {
        e?.classList.add('slide-fade-out');
        if (key === 'shopModuleImg') await event(e);
    }
};

export const nextSlide = async (slide, setSlide, brand, removeClass) => {
    setSlide((slide + 1) % brand.length);

    removeClass.forEach((e) => {
        e?.classList.remove('slide-fade-in', 'slide-fade-out');
    });
};
