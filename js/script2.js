const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  if ([...this.classList].indexOf("active") >= 0) {
    this.classList.remove("active");
    return;
  }
  panels.forEach(panel => panel.classList.remove("active"));
  this.classList.toggle("active");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open");
  }
}
panels.forEach(panel => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});