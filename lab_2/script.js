document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (!hamburger || !navMenu) {
        console.error("Element not found: check IDs");
        return;
    }

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});