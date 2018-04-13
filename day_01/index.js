/**
 * @file day1
 * @author arvin.qi
 */

function play(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!key) {
        return;
    }
    if (!key.classList.contains('playing')) {
        key.classList.add('playing');
    }
    else {
        key.classList.remove('playing');
    }
    audio.currentTime = 0;
    audio.play();
}
function transitionEnd(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('playing');
}
window.addEventListener('keydown', play);
window.addEventListener('transitionend', transitionEnd, '.key');
