const timer = document.querySelector(`.timer`),
    play = document.querySelector(`.menu__button--play`),
    pause = document.querySelector(`.menu__button--pause`),
    reset = document.querySelector(`.menu__button--reset`);

let interval = null,
    time = `25:00`;


const playInterval = () => {

    let minute = Number.parseInt(time.substring(0, 2)),
        second = Number.parseInt(time.substring(3, 5));

    second -= 1;
    if (second < 0) {
        minute -= 1;
        second = 59;
    }
    //checks if end
    if (minute == 0) {
        clearInterval(interval);
        timer.innerHTML = `KONIEC`;
    } else {
        time = `${minute}:${second}`;
        timer.innerHTML = time;
    }

    interval = setTimeout(() => {
        playInterval();
    }, 1000);;
}

const playF = () => {
    playInterval();
}

const pauseF = () => {
    clearTimeout(interval);
}

const resetF = () => {
    clearTimeout(interval);
    time = `25:00`;
    timer.innerHTML = time;
}


play.addEventListener(`click`, playF);
pause.addEventListener(`click`, pauseF);
reset.addEventListener(`click`, resetF);