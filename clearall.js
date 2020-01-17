const toDoContainer1 = document.querySelector(".todo-container"),
  toDoForm1 = toDoContainer1.querySelector(".js-toDoForm"),
  toDoInput1 = toDoForm1.querySelector("input"),
  toDoList1 = toDoContainer1.querySelector(".js-toDoList");

function clearAll() {
  toDoList1.remove();
  localStorage.removeItem(TODOS_LS);
  location.reload();
  toDoInput1.focus();
}

function init() {
  clearAllBtn.addEventListener("click", clearAll);
}

init();
