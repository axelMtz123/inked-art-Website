gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
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
}, "<")

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
    y: 50,
    stagger: .5,
    duration: .5,
})

const heroCta = document.querySelector (".hero-cta")
const portfolioCta = document.querySelector (".portfolio-cta")

const bookNowBtn = [heroCta, portfolioCta].filter(Boolean)

bookNowBtn.forEach(( btn ) => {
    btn.addEventListener("mouseenter", () => {
        gsap.fromTo(btn, {
            x: -10,
        }, {
            x: 10,
            duration: .5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 6,
        })
    })

    btn.addEventListener("mouseleave", () => {
        gsap.killTweensOf(btn)
        gsap.to(btn, { x: 0, duration: 0.1 })
    })
})

/*==============
    about
=============*/

ScrollTrigger.create ({
    trigger: "#about",
    start: "-=0",
    end: "+=600",
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

/*==================
    Testimonial
====================*/ 

const testimonials = [
  {
    element: document.querySelector(".quote-1"),
    author: document.querySelector(".t-line-1 p"),
    quotes: [
      { quote: "Absolutely incredible work! The detail and precision are unmatched.", author: "– Alex T." },
      { quote: "Friendly, professional, and the vibe in the studio is amazing.", author: "– Sam R." },
      { quote: "The artist really listened to what I wanted and brought my vision to life.", author: "– Jamie L." }
    ]
  },
  {
    element: document.querySelector(".quote-2"),
    author: document.querySelector(".t-line-2 p"),
    quotes: [
      { quote: "Second box first quote here.", author: "– Person A" },
      { quote: "Second box second quote here.", author: "– Person B" },
      { quote: "Second box third quote here.", author: "– Person C" }
    ]
  },
  {
    element: document.querySelector(".quote-3"),
    author: document.querySelector(".t-line-3 p"),
    quotes: [
      { quote: "Third box first quote here.", author: "– Person X" },
      { quote: "Third box second quote here.", author: "– Person Y" },
      { quote: "Third box third quote here.", author: "– Person Z" }
    ]
  }
];

testimonials.forEach(({ element, author, quotes }) => {
  const tl = gsap.timeline({ repeat: -1, defaults: { duration: 2, ease: "power1.inOut" } });

  quotes.forEach((t) => {
    tl.to([element, author], { opacity: 0 })
    tl.add(() => {
      element.innerHTML = t.quote
      author.innerHTML = t.author
    })
    tl.to([element, author], { opacity: 1 })
    tl.to({}, { duration: 4 })
  });
});

const marquee = gsap.to(".marquee-track", {
  x: "-50%",
  duration: 30,
  ease: "none",
  repeat: -1,
})

const track = document.querySelector(".marquee-track")

track.addEventListener("mouseenter", () => marquee.pause())
track.addEventListener("mouseleave", () => marquee.play())

/*====================
    Artist
======================*/

const workBtns = document.querySelectorAll(".work-btn")

workBtns.forEach(btn => btn.addEventListener("mouseenter", () => {
    gsap.fromTo (btn, {
        x: -10,
        duration: .5,
    }, {
        x: 10,
        duration: .5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 6,
    })

}))

workBtns.forEach(btn => btn.addEventListener("mouseleave", () => {
    gsap.killTweensOf(btn);
    gsap.to(btn, { x: 0, duration: 0.1 }); 
}));


/*==================
    Portfolio
====================*/

const overlay = document.getElementById("portfolio-overlay")  
const bg = document.getElementById("bg-overlay")             
const closeBtn = document.getElementById("close-btn")        
const portfolioFrame = document.getElementById("portfolio-frame")

const artists = [
    { btn: "chris-btn", page: "portfolio1.html" },
    { btn: "jacob-btn", page: "portfolio2.html" },
]

const openTl = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.inOut", duration: .6,}
})

openTl
    .set ([overlay, bg], { visibility: "visible" })
    .from (overlay, { opacity: 0, scale: 0.8 })
    .to (bg, { opacity: 1 }, "<")

artists.forEach(({ btn, page}) => {
    document.getElementById(btn).addEventListener("click", () => {
        portfolioFrame.src = page
        openTl.play()
    })
})

closeBtn.addEventListener("click", () => {
    openTl.reverse()
})

bg.addEventListener("click", () => {
    openTl.reverse()
})

/*===================
    How It Works 
=====================*/

const stepCard = document.querySelectorAll(".step-cardInner")

stepCard.forEach((card) => {
    let isExpanded = false

    card.addEventListener("click", () => {
        isExpanded
            ? gsap.to(card, {height: 80, duration: .5})
            : gsap.to(card, {height: "auto", duration: .5})

            isExpanded = !isExpanded
    })
})