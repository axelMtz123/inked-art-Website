gsap.registerPlugin(ScrollTrigger);
Splitting ();

gsap.from (".fade-in", {
    opacity: 0,
    stagger: .05,
    y: -20,
    scrollTrigger: {
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
    }
})

/*==============
    Menu
=============*/

const hamburger = document.querySelector (".hamburger")
const menu = document.querySelector (".menu")

const menuTl = gsap.timeline({ paused: true });

menuTl.to(menu, {
    borderRadius: "0%",
    scale: 1,
    duration: 1,
    ease: "power3.out"
});

menuTl.to (".ham-line", {
    background: "#000000",
    duration: .5,
}, "<")

 menuTl.from (".menu ul .word", {
    y: -50,
    opacity: 0,
    duration: .5,
    stagger: .2,
    ease: "back.out",
})

let isOpen = false;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");

    if (!isOpen) {
        menuTl.play()
    } else {
        menuTl.reverse()
    }

    isOpen = !isOpen
})

gsap.to ("header", {
    backgroundColor: "#000000",
    scrollTrigger: {
        trigger: ".hero-cta",
        start: "top top",
        end: "bottom top",
        scrub:true,
    }
})



/*=============
    Hero
=============*/

gsap.from (".hero-title h1 .word", {
    opacity: 0,
    x: -200,
    stagger: .5,
    duration: .5,
})

const heroCta = document.querySelector (".hero-cta")

heroCta.addEventListener ("mouseenter", () => {
    gsap.fromTo (heroCta, {
        x: -10,
        duration: .5,
    }, {
        x: 10,
        duration: .5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 6,
    })
})

heroCta.addEventListener("mouseleave", () => {
  gsap.killTweensOf(heroCta);
  gsap.to(heroCta, { x: 0, duration: 0.1 }); 
});

/*==============
    about
=============*/

ScrollTrigger.create ({
    trigger: "#about",
    start: "-=0",
    end: "+=400",
    pin: true,
    onEnter: () => aboutTl.play(),
    onLeaveBack: () => aboutTl.reverse(),})

gsap.to (".about-text .word", {
    color: "#FAF3E6",
    stagger: .05,
    opacity: 1,
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 60%",
        end: "bottom 30%",
        scrub: 1,
    }
})