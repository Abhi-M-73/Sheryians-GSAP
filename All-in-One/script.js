
let tl = gsap.timeline()
tl.from(".navbar .brand", {
  x: -70,
  duration: 1,
  opacity: 0,
  delay: 0.5,
})
tl.from(".navbar .itmes h3", {
  y: -30,
  opacity: 0,
  stagger: 0.3

})
tl.from(".left h1", {
  x: -40,
  opacity: 0,
  stagger: 0.3

})
tl.from(".left p", {
  x: -40,
  opacity: 0,
  stagger: 0.3

})
tl.from(".left a", {
  scale: 0,
  opacity: 0,
  stagger: 0.3


})
tl.from(".right img", {
  scale: 0,
  opacity: 0,
  stagger: 0.3


})

gsap.from(".course-card", {
  opacity: 0,
  scale: 0,
  y: 100,
  duration: 5,
  delay: 1,
  stagger: 2.5,
  scrollTrigger: {
    trigger: ".courses-container .course-card",
    // markers:true,
    duration: 1.5,
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
})

gsap.to(".text-slide h1", {
  x: "-255vw", // Move out of view to the left
  scrollTrigger: {
    trigger: ".text-slide",
    start: "top top", // Start pinning when the section reaches the top
    end: "+=200%",    // Keep the section pinned for 2x the viewport height
    scrub: true,      // Smooth scrolling
    pin: true,        // Pin the section during the animation
    // markers: true,    // Enable markers for debugging (remove in production)
  }
});

