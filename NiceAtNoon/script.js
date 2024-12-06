
gsap.from(".hero-section-left h1", {
    y : 200,
    opacity : 0,
    duration: 1,
    stagger : 0.1,
})

gsap.from(".hero-section-right p", {
    y : 200,
    opacity : 0,
    duration: 1,
})

gsap.from(".right-btn", {
    y : 200,
    opacity : 0,
    duration: 1,
})

gsap.to(".slider-section", {
    x: "-200vw", // Move the slider section to the left by 100%
    scrollTrigger: {
      trigger: ".slider-section", // The section starts the animation
      start: "top top",           // Start when the section reaches the top
      end: "bottom top",          // End when the section scrolls out of view
      scrub: true,                // Smooth scrolling animation
      pin: true,                  // Pin the slider during the animation
    },
  });