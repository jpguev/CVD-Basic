const burgir = document.querySelector(".burgir__menu");
const headerNaV = document.querySelector(".header__nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    headerNaV.classList.toggle("open");
})