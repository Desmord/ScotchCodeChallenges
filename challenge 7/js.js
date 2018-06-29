const button = document.querySelector(`.button`),
    menu = document.querySelector(`.menu`),
    content = document.querySelector(`.content`);



button.addEventListener(`click`, () => {

    if (menu.style.marginLeft == `-20%`) {
        menu.style.marginLeft = `0%`;
    } else {
        menu.style.marginLeft = `-20%`;
    }


});