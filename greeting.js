const loginname = document.querySelector(".login-name"),
  form = loginname.querySelector(".js-form"),
  askName = loginname.querySelector(".ask-name"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  resetBtn = document.querySelector(".reset-btn"),
  clearAllBtn = document.querySelector(".clearAll-btn");

const toDoContainer2 = document.querySelector(".todo-container"),
  toDoForm2 = toDoContainer2.querySelector(".js-toDoForm"),
  toDoInput2 = toDoForm2.querySelector("input"),
  toDoList2 = toDoContainer2.querySelector(".js-toDoList");

const USER_LS = "currentUser",
  SHOWING_ON = "showing",
  SHOWING_OFF = "not-showing",
  APPEAR = "appear",
  DISAPPEAR = "disappear";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  toDoContainer.classList.remove(SHOWING_OFF);
  toDoContainer.classList.add(APPEAR);
  const currentValue = input.value;
  input.autofocus = false;
  paintGreeting(currentValue);
  saveName(currentValue);
  resetBtn.classList.remove(SHOWING_OFF);
  resetBtn.classList.add(APPEAR);
  clearAllBtn.classList.remove(SHOWING_OFF);
  clearAllBtn.classList.add(APPEAR);
}

function askForName() {
  loginname.classList.add(SHOWING_ON);
  askName.innerHTML = `Welcome! What's your name?`;
  input.autofocus = "autofocus";
  loginname.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  loginname.classList.remove(SHOWING_ON);
  loginname.classList.add(DISAPPEAR);
  loginname.classList.add(SHOWING_OFF);
  greeting.classList.add(SHOWING_ON);
  greeting.innerHTML = `Hello, ${text}!`;
  toDoInput2.focus();
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
