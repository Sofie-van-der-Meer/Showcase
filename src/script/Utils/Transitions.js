export default class Transitions {
    constructor() {
        this.sect = document.querySelector('.inline-scroll_container');
        this.carousel = document.querySelector('.sect-imgList');
        this.pointer = document.querySelector('.fa-hand-pointer');
        this.deltaY = 0;
        this.carousel_width = 0;

        let lastImg = this.carousel.lastChild;
        waitForImgToLoad(lastImg).then(()=>{
            checkCarouselWidth(this.sect, this.carousel, this.carousel_width, this.deltaY);
        })

        this.sect.addEventListener("pointerenter", (event) => {
            animatePointer(this.pointer);
        })

        function waitForImgToLoad(img) {
            return new Promise(resolve=>{img.onload = resolve})
        }

        function checkCarouselWidth(s, c, w, y) {
            let sect_width = s.clientWidth;
            let carousel_width = c.scrollWidth;
            let lastImg_width = c.lastChild.scrollWidth;
            
            w = (carousel_width - lastImg_width + (lastImg_width - sect_width));

            if (s && c) {
                c.addEventListener('wheel', (event) => {

                    y -= event.deltaY;

                    if (y >= 0) y = 0;
                    if (y <= -w) y = -w;
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