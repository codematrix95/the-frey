import { animationEnd, delay, slideFadeIn, slideFadeOut, nextSlide } from "./helpers";

const slideAnimation = async (slide, ref, setSlide, brand) => {
    const animateRef = Object.entries(ref.current);
    const removeClass = Object.values(ref.current);

    await slideFadeIn(animationEnd, animateRef);
    await delay(500);
    await slideFadeOut(animationEnd, animateRef);
    await nextSlide(slide, setSlide, brand, removeClass);
};

export default slideAnimation;
