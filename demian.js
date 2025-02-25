document.addEventListener("DOMContentLoaded", function () {
    const egg1 = document.querySelector(".egg1");
    const egg2 = document.querySelector(".egg2");

    // Ensure elements exist before applying styles
    if (egg1 && egg2) {
        // Fade in egg1 first
        setTimeout(() => {
            egg1.style.opacity = "1";
        }, 500); // Egg1 fades in after 0.5s

        // Fade in egg2 after egg1 fully appears
        setTimeout(() => {
            egg2.style.opacity = "1";
        }, 1200); // Egg2 fades in 2 seconds after egg1
    }
});
