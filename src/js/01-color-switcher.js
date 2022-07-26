const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let id = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  if (startBtn.hasAttribute('disabled')) {
    return;
  }
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', 'true');
  id = setInterval(changeBodyColor, 1000);
}

function onStopClick() {
  if (stopBtn.hasAttribute('disabled')) {
    return;
  }
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
  clearInterval(id);
}

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
