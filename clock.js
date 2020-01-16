const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(
    seconds
  )}`;
}

function init() {
  setInterval(getTime, 500);
}

init();
