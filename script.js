let activePiano = function (e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.piano-key[data-letter="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('piano-key-active')
}

let activePianoMouse = function (e) {
    const audio = document.querySelector(`audio[data-key=${e.target.dataset.letter}]`);
    const key = document.querySelector(`.piano-key[data-letter="${e.target.dataset.letter}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('piano-key-active')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('piano-key-active')
}

window.addEventListener('keydown', activePiano)
window.addEventListener('click', activePianoMouse)
const keys = document.querySelectorAll('.piano-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))



let fullScreen = document.querySelector('.fullscreen')

fullScreen.addEventListener("fullscreenchange", function(e){
    console.log('статус fullscreen = ');
  });

let buttonRight = document.querySelector('.btn-notes');
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
