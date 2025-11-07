const images = document.querySelectorAll('.about__img-desktop, .about__img-tablet, .about__img-mobile');
const maxOffset = 250;

export function initParallax() {
    if (images.length === 0) {
        return;
    }

    function handleScroll() {
        const viewportHeight = window.innerHeight;
        const startWhen = viewportHeight * 0.35;

        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const elementTop = rect.top;

            if (elementTop <= startWhen) {
                const progress = Math.min(1, (startWhen - elementTop) / (viewportHeight - startWhen));
                const offset = progress * maxOffset;

                img.style.transform = `translateY(${offset}px)`;
            } else {
                img.style.transform = 'translateY(0px)';
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
}