import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

const startBtn = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');
const field = document.querySelector('.field');

// timerEl.style.display = 'flex';
// timerEl.childNodes.style.display = 'flex';
// timerEl.childNodes.style.flexDirection = 'column';

startBtn.addEventListener('click', onStartClick);

const finalDate = flatpickr('#datetime-picker', options);

// console.log(convertMs(1660160909548 - Date.now()));

function onStartClick() {
  console.log('start timer');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
