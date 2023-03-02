const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const newYearTIme = new Date(`March 24 2023 00:00:00`);

const getTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
  daysContainer.textContent = getTimeUnit(days);
  hoursContainer.textContent = getTimeUnit(hours);
  minutesContainer.textContent = getTimeUnit(minutes);
  secondsContainer.textContent = getTimeUnit(seconds);
};

const updateCountDown = () => {
  const currentTime = new Date();
  const difference = newYearTIme - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;
  insertCountDownValues({ days, hours, minutes, seconds });
};

setInterval(updateCountDown, 1000);
