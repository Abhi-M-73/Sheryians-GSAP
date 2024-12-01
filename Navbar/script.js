let menu = document.querySelector(".menu")
let close = document.querySelector(".close")

let tl = gsap.timeline();
tl.to(".full", {
    right: 0,
    duration: 0.5,

});

tl.from("nav h4", {
    x: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3
});

tl.from("nav button", {
    opacity: 0,
    scale: 0
});

tl.pause();

menu.addEventListener("click", () => {
    tl.play()
});

close.addEventListener("click", () => {
    tl.reverse()
})