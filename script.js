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



let darkModeIcon = document.querySelector(".dark-mode");
let lightModeIcon = document.querySelector(".light-mode");
let rootElement = document.documentElement;

darkModeIcon.addEventListener("click", () => { switchAppearance("dark") });
lightModeIcon.addEventListener("click", () => { switchAppearance("light") });


document.addEventListener("DOMContentLoaded", () => {
    switchAppearance(getComputedStyle(rootElement).getPropertyValue("--mode"));
});