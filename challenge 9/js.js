const navbarButtons = document.querySelectorAll(`.navbar__item`),
    articles = document.querySelectorAll(`.article`),
    siteHeight = document.querySelector(`body`).getBoundingClientRect().height;


const scrollEvent = (e) => {

    [...navbarButtons].forEach(button => button.style.backgroundColor = `rgb(135, 165, 211)`);

    navbarButtons[Number.parseInt((e.pageY + 200) / (siteHeight / articles.length))].style.backgroundColor = `rgb(117, 126, 209)`;

}

window.addEventListener(`scroll`, scrollEvent);