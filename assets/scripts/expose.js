// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('header + img');
  const hornAudio = document.querySelector('audio');
  hornSelect.addEventListener('change', function() {
    hornImg.src = "assets/images/" + hornSelect.value + ".svg";
    hornAudio.src = "assets/audio/" + hornSelect.value + ".mp3";
  });

  const vol = document.getElementById('volume');
  const volImg = document.querySelector('#volume-controls > img');
  vol.addEventListener('change', function() {
    if (vol.value == 0) volImg.src = "assets/icons/volume-level-0.svg";
    else if (vol.value < 33) volImg.src = "assets/icons/volume-level-1.svg";
    else if (vol.value < 67) volImg.src = "assets/icons/volume-level-2.svg";
    else volImg.src = "assets/icons/volume-level-3.svg";
  });

  const btnPlay = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  btnPlay.addEventListener('click', function() {
    hornAudio.volume = vol.value / 100;
    hornAudio.play();
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  })
}