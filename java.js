gsap.registerPlugin(ScrollTrigger);

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