const burgerO = document.querySelector("#burgerO");
const burgerC = document.querySelector("#burgerC");
const menu = document.querySelector(".header__menu");
const navO = document.querySelector(".header__navO");
const header = document.querySelector(".header__wrapper");
console.log(menu);


burgerO.addEventListener("click", () => {
        menu.style.display = "block";
        header.style.visibility = "hidden";
        navO.style.visibility = "hidden";
});
burgerC.addEventListener("click", () => {
    menu.style.display = "none";
    header.style.visibility = "visible";
    navO.style.visibility = "visible";
});
