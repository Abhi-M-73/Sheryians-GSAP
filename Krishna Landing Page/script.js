let tl = gsap.timeline();

tl.from('nav h1', {
    y: -50,
    opacity: 0,
    stagger: 0.2,
})
    .from('.nav-links h4', {
        y: -50,
        opacity: 0,
        stagger: 0.2,
    }, "-=0.5")

    .from('.left > h1', {
        x: -50,
        opacity: 0,
        stagger: 0.3,
    })
    .from('.left > p', {
        x: -50,
        opacity: 0,
        stagger: 0.3,
    })
    .from('button', {
        x: -50,
        opacity: 0,
        stagger: 0.2,
    })
    .from('img', {
        x: 50,
        opacity: 0,
        stagger: 0.2,
    })