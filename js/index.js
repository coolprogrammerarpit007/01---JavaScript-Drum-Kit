`use strict`;

// function to play sound

const playMusic = function (song, key) {
  console.log(key);
  key.classList.add(`playing`);
  setTimeout(() => {
    key.classList.remove(`playing`);
  }, "100");
  let mySound = new Audio(song);
  mySound.play();
};
const keys = document.querySelectorAll(`.key`);

document.addEventListener(`keyup`, (e) => {
  const keyCode = e.keyCode;

  keys.forEach((key) => {
    if (Number(key.dataset.key) === keyCode) {
      if (keyCode === 65) {
        console.log(keyCode);
        playMusic("./../sounds/clap.wav", key);
      } else if (keyCode === 83) {
        console.log(keyCode);
        playMusic("./../sounds/hihat.wav", key);
      } else if (keyCode === 68) {
        console.log(keyCode);
        playMusic("./../sounds/kick.wav", key);
      } else if (keyCode === 70) {
        console.log(keyCode);
        playMusic("./../sounds/openhat.wav", key);
      } else if (keyCode === 71) {
        console.log(keyCode);
        playMusic("./../sounds/guitar.wav", key);
      } else if (keyCode === 72) {
        console.log(keyCode);
        playMusic("./../sounds/ride.wav", key);
      } else if (keyCode === 74) {
        console.log(keyCode);
        playMusic("./../sounds/snare.wav", key);
      } else if (keyCode === 75) {
        console.log(keyCode);
        playMusic("./../sounds/tom.wav", key);
      } else if (keyCode === 76) {
        console.log(keyCode);
        playMusic("./../sounds/tink.wav", key);
      }
    }
  });
});
