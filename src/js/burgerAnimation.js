const tham = document.querySelector(".tham");
const navmob = document.querySelector("#navmob");

tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmob.classList.toggle("hidden");
});

navmob.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmob.classList.toggle("hidden");
});
