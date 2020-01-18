const toDoContainer = document.querySelector(".todo-container"),
  toDoForm = toDoContainer.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = toDoContainer.querySelector(".js-toDoList");

// const SHOWING_OFF = "not-showing";
const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  checkbox.type = "checkbox";
  checkbox.className = "done";
  span.className = "todo-element";
  const ranNumId = Math.floor(Math.random() * 10000);
  const newId = ranNumId;
  const checkboxId = `check-${newId}`;
  checkbox.id = checkboxId;
  label.htmlFor = checkboxId;
  delBtn.innerHTML = `<i class="far fa-times-circle"></i>`;
  delBtn.className = "del-btn";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  li.classList.add(APPEAR);
  toDoList.appendChild(li);
  const toDoObj = {
    id: newId,
    text: text
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedUser = localStorage.getItem(USER_LS);
  if (!loadedUser) {
    toDoContainer.classList.add(SHOWING_OFF);
  } else {
  }
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
