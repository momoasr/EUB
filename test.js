
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log();
        });
    })
}

window.addEventListener("load", initSlider);