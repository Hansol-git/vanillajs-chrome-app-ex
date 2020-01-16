function clearAll() {
  toDoList.remove();
  localStorage.removeItem(TODOS_LS);
  location.reload();
}

function init() {
  clearAllBtn.addEventListener("click", clearAll);
}

init();
