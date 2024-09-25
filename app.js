

gsap.to(".page2", {
    scrolltrigger : {
        trigger: ".page2",
        scroll: "body",
        markers: true
        
    }
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
