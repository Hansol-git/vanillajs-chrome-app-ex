function delLocalStg() {
  localStorage.clear();
  location.reload();
}

function init() {
  resetBtn.addEventListener("click", delLocalStg);
}

init();
