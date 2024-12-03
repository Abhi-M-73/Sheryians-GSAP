// Select elements
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const fullMenu = document.querySelector(".full");
const nav_h1 = document.querySelectorAll("nav h1");
const nav_button = document.querySelector("nav button");

// Open the menu with GSAP animation
menuIcon.addEventListener("click", () => {
    gsap.to(fullMenu, {
        right: 0, // Slide the menu into view from the right
        duration: 0.6,
        ease: "power2.inOut",
        opacity: 1, // Fade in the menu smoothly
        delay: 0.1, // Slight delay for a more natural effect
    });

    gsap.from(nav_h1, {
        opacity: 0,
        x: -200,
        duration: 1.5,
        stagger: 0.2,
    });

    gsap.from(nav_button, {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 1,
        stagger: 0.2,
    });

});

// Close the menu with GSAP animation
closeIcon.addEventListener("click", () => {
    gsap.to(fullMenu, {
        right: "-70%", // Slide the menu out of view to the right
        duration: 0.6,
        ease: "power2.inOut",
        opacity: 0, // Fade out the menu smoothly
    });
});
