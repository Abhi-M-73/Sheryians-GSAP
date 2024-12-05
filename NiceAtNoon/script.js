const h1 = document.querySelectorAll(".heading-section-left h1")
const p = document.querySelectorAll(".heading-section-right p")
const btn = document.querySelectorAll(".right-btn")

gsap.from(h1, {
    y : 200,
    opacity : 0,
    duration: 1,
    stagger : 0.1,
})

gsap.from(p, {
    y : 200,
    opacity : 0,
    duration: 1,
})

gsap.from(btn, {
    y : 200,
    opacity : 0,
    duration: 1,
})