let menuButton = document.getElementsByClassName("menu-btn")[0];

console.log(menuButton);

menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(e) {
    console.log(e)
    const nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    menuButton.classList.toggle("change");
}