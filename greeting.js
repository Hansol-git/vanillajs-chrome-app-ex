const loginname = document.querySelector(".login-name"),
  form = loginname.querySelector(".js-form"),
  askName = loginname.querySelector(".ask-name"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  resetBtn = document.querySelector(".reset-btn"),
  clearAllBtn = document.querySelector(".clearAll-btn");

const USER_LS = "currentUser",
  SHOWING_ON = "showing",
  SHOWING_OFF = "not-showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  toDoContainer.classList.remove(SHOWING_OFF);
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  resetBtn.classList.remove(SHOWING_OFF);
  resetBtn.classList.add(SHOWING_ON);
  clearAllBtn.classList.remove(SHOWING_OFF);
  clearAllBtn.classList.add(SHOWING_ON);
}

function askForName() {
  loginname.classList.add(SHOWING_ON);
  askName.innerHTML = `Welcome! What's your name?`;
  loginname.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  loginname.classList.remove(SHOWING_ON);
  loginname.classList.add(SHOWING_OFF);
  greeting.classList.add(SHOWING_ON);
  greeting.innerHTML = `Hello, ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (!currentUser) {
    resetBtn.classList.add(SHOWING_OFF);
    clearAllBtn.classList.add(SHOWING_OFF);
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
