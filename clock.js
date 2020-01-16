const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const ampm = clockContainer.querySelector(".ampm");

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const varampm = date.getHours() > 12 ? "PM" : "AM";
  clockTitle.innerHTML = `${addZero(hours)}:${addZero(minutes)}`;
  ampm.innerHTML = ` ${varampm}`;
}

function init() {
  setInterval(getTime, 500);
}

init();
