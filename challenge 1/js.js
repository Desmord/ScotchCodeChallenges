const button = document.querySelector(`.button`);

const jiggleAnimation = () => {
    button.classList.add(`anim`);
    setTimeout(() => {
        button.classList.remove(`anim`);
    }, 500);
}

button.addEventListener(`click`, jiggleAnimation);