const openButton = document.querySelector("#hamburger");
const fullscreenMenu = document.querySelector("#fullscreen-menu");
const closeButton = document.querySelector("#close");

openButton.addEventListener("click", e => {
    e.preventDefault();

    if (fullscreenMenu.style.visibility === "visible") {
        fullscreenMenu.style.visibility = "hidden";
    } else {
        fullscreenMenu.style.visibility = "visible";
    }

    if (fullscreenMenu.style.opacity === "1") {
        fullscreenMenu.style.opacity = "0";
    } else {
        fullscreenMenu.style.opacity = "1";
    }

})

closeButton.addEventListener("click", e => {
    e.preventDefault();

    if (fullscreenMenu.style.visibility === "visible") {
        fullscreenMenu.style.visibility = "hidden";
    } else {
        fullscreenMenu.style.visibility = "visible";
    }

    if (fullscreenMenu.style.opacity === "1") {
        fullscreenMenu.style.opacity = "0";
    } else {
        fullscreenMenu.style.opacity = "1";
    }
})