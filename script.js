function switchAppearance(mode) {
    if (mode == "dark") {
        darkModeIcon.classList.add("hide");
        rootElement.classList.remove("light");
        rootElement.classList.add("dark");
        lightModeIcon.classList.remove("hide")
    }
    else if (mode == "light") {
        lightModeIcon.classList.add("hide")
        rootElement.classList.remove("dark");
        rootElement.classList.add("light");
        darkModeIcon.classList.remove("hide");
    }
}

function pinNavbar(action) {
    if (action == "pin") {
        rootElement.style.setProperty("--navbar-position", "sticky");
        pinIcon.classList.add("hide");
        unpinIcon.classList.remove("hide");
    }
    else if (action == "unpin") {
        rootElement.style.setProperty("--navbar-position", "static");
        unpinIcon.classList.add("hide");
        pinIcon.classList.remove("hide");
    }
}



let darkModeIcon = document.querySelector(".dark-mode");
let lightModeIcon = document.querySelector(".light-mode");

let pinIcon = document.querySelector(".pin");
let unpinIcon = document.querySelector(".unpin");

let rootElement = document.documentElement;

darkModeIcon.addEventListener("click", () => { switchAppearance("dark") });
lightModeIcon.addEventListener("click", () => { switchAppearance("light") });

pinIcon.addEventListener("click", () => { pinNavbar("pin") });
unpinIcon.addEventListener("click", () => { pinNavbar("unpin") });


document.addEventListener("DOMContentLoaded", () => {
    switchAppearance(getComputedStyle(rootElement).getPropertyValue("--mode"));
});