/* insert footer content */
document.querySelector(".footer").insertAdjacentHTML("afterbegin", `<a href="#" class="topbutton" onclick="smoothJumpUp(); return false;" title="Вернуться в начало станицы">&#8593; Наверх</a>`);

/* go to top function */
var smoothJumpUp = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 20);
  }
}