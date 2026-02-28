
const portfolioCta = document.querySelector (".portfolio-cta")

    portfolioCta.addEventListener("mouseenter", () => {
        gsap.fromTo(portfolioCta, {
            x: -10,
        }, {
            x: 10,
            duration: .5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 6,
        })
    })

    portfolioCta.addEventListener("mouseleave", () => {
        gsap.killTweensOf(portfolioCta)
        gsap.to(btn, { x: 0, duration: 0.1 })
    })

portfolioCta.addEventListener("click", () => {
    window.parent.openTl.reverse()
    window.parent.document.getElementById("how-it-works").scrollIntoView({ behavior: "smooth" })
})
