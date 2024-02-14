const header = document.querySelector(".header");
window.console.log(scrollY);
window.addEventListener("scroll", () => {
  if (scrollY >= 500) {
    header.classList.add("open");
  } else {
    header.classList.remove("open");
  }
});

const burgir = document.querySelector(".burgir__menu");
const headerNaV = document.querySelector(".header__nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    headerNaV.classList.toggle("open");
})