const burgerO = document.querySelector("#burgerO");
const burgerC = document.querySelector("#burgerC");
const menu = document.querySelector(".header__menu");
const navO = document.querySelector(".header__navO");
const header = document.querySelector(".header__wrapper");
const wave = document.querySelector(".wave");
const wave2 = document.querySelector(".wave2");
console.log(menu);


burgerO.addEventListener("click", () => {
        menu.style.display = "block";
        header.style.visibility = "hidden";
        navO.style.visibility = "hidden";
        wave.style.background = "url(../img/wave2.svg)";
        wave2.style.display = "none";
});
burgerC.addEventListener("click", () => {
    menu.style.display = "none";
    header.style.visibility = "visible";
    navO.style.visibility = "visible";
    wave.style.background = "url(../img/wave.svg)";
    wave2.style.display = "block";
});
