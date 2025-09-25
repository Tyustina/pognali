const cardList = document.querySelectorAll('.hero__card');
function animationsHeroCard() {
    cardList.forEach((card,index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, 300*index+1);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    animationsHeroCard();
});
