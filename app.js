const flightPath = {
    curviness: 1,
    autoRotate: true,
    values: [
        { x: 350, y: -20 },
        { x: 700, y: 40 },
        { x: 900, y: -50 },
        { x: 700, y: -110 },
        { x: 500, y: -50 },
        { x: 700, y: 40 },
        { x: 900, y: -20 },
        { x: window.innerWidth, y: -150 },

    ]

}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    triggerHook: 0,
    duration: 3000,

})

    .setTween(tween)
    // .addIndicators()
    .setPin('.animation')
    .addTo(controller);
