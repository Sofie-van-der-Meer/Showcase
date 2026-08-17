export default class Transitions {
    constructor() {
        this.sect = document.querySelector('.inline-scroll_container');
        this.carousel = document.querySelector('.sect-imgList');
        this.pointer = document.querySelector('.fa-hand-pointer');
        this.deltaY = 0;
        this.carousel_width = 0;

        carouselScroll(this.sect, this.carousel, this.deltaY);

        this.sect.addEventListener("pointerenter", (event) => {
            animatePointer(this.pointer);
        })

        function carouselScroll(s, c, y) {
            if (s && c) {
                c.addEventListener('wheel', (event) => {

                    y -= event.deltaY;

                    if (y >= 0) y = 0;
                    // if (y <= -w) y = -w;
                    else {
                        c.style.transform = `translateX(${y}px)`;
                        event.preventDefault();
                    }
                },
                { passive: false}
                )
            }
        }

        function animatePointer(p) {
            p.animate([
                { transform: "translateX(10%)", opacity: "1", rotate: "10deg" },
                { transform: "translateX(-100%)", opacity: "0.85", rotate: "-5deg" },
                { transform: "translateX(10%)", opacity: "1", rotate: "10deg" },
            ], {
                duration: 3000,
                easing: "linear",
                iterations: 1,
            })
        }
    }
}