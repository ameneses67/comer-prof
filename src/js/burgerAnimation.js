const tham = document.querySelector(".tham");
const navmob = document.querySelector("#navmob");

tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmob.classList.toggle("scale-y-0");
  navmob.classList.toggle("scale-y-100");
});

navmob.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmob.classList.toggle("scale-y-0");
  navmob.classList.toggle("scale-y-100");
});
