const eyeLid = document.querySelector(`.alien__eyeLid`),
    eyeLidTop = eyeLid.getBoundingClientRect().y,
    eyeLidLeft = eyeLid.getBoundingClientRect().x;

const mouseMove = (e) => {
    let kat = Math.atan2(e.clientY - eyeLidTop, e.clientX - eyeLidLeft),
        x = Number.parseInt(35 * Math.cos(kat)),
        y = Number.parseInt(35 * Math.sin(kat));

    eyeLid.style.left = `${35+x}px`;
    eyeLid.style.top = `${35+y}px`;
    eyeLid.style.webkitTransform = `rotate(${kat}rad)`;

}

document.addEventListener(`mousemove`, mouseMove);