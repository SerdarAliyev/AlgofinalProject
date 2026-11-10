const menuu = document.querySelector(".menuu");
const menuIcon = document.querySelector(".menu");
const cix = document.querySelector(".cix");

menuIcon.addEventListener("click", function () {
    menuu.classList.add("active");
});

cix.addEventListener("click", function () {
    menuu.classList.remove("active");
});