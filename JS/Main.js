const openMenu =document.getElementById("open-mobile-menu");
const closeMenu =document.getElementById("close-mobile-menu");
const nav =document.querySelector("nav");
openMenu.addEventListener("click", ()=> {
    nav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
});