const fullScreen = document.querySelector(".fullscreen");
const btn = document.querySelector(".btn-container");
const btnCollection = document.querySelectorAll(".btn");
const piano = document.getElementById("piano");

const toggleScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.fullscreenEnabled) {
        document.exitFullscreen();
    }
}

fullScreen.addEventListener('click', toggleScreen);

let activePiano = function (e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.piano-key[data-letter="${e.code}"]`);
    if (!audio) return;
    if (e.repeat) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('piano-key-active')
}

window.addEventListener('keydown', activePiano)

const keys = document.querySelectorAll('.piano-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


let activePianoMouse = function (e) {
    const audio = document.querySelector(`audio[data-key=${e.target.dataset.letter}]`);
    const key = document.querySelector(`.piano-key[data-letter="${e.target.dataset.letter}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('piano-key-active')
}
window.addEventListener('click', activePianoMouse)

/* let buttonRight = document.querySelector('.btn-notes');
let buttonLeft = document.querySelector('.btn-letters');

function addClassRight(){
    buttonRight.classList.add('btn-active');
    buttonLeft.classList.remove('btn-active');
}

function addClassLeft(){
    buttonLeft.classList.add('btn-active');
    buttonRight.classList.remove('btn-active');
}
buttonRight.addEventListener('click', addClassRight);
buttonLeft.addEventListener('click', addClassLeft)

keys.forEach((elem) => {
    elem.addEventListener("mousedown", activePiano);
}); */

btn.addEventListener("click", event => {
    btnCollection.forEach(elem => {
        elem.classList.remove('btn-active')
    })
    event.target.classList.add('btn-active');
    if (event.target.classList.contains("btn-letters")) {
        keys.forEach((elem) => {
            elem.classList.add("piano-key-letter");
        })
    } else {
        keys.forEach((elem) => {
            elem.classList.remove("piano-key-letter")
        })
    }
});

piano.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.remove("piano-key-active");
    }
});