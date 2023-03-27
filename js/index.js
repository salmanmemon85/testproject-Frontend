const btnClick = document.querySelector(".menu-icon");
const menubar = document.querySelector(".navbar")
const closeBtn = document.querySelector(".close");

btnClick.addEventListener("click", () => {
  menubar.classList.add("active")
})
closeBtn.addEventListener("click", () => {
  menubar.classList.remove("active");
});