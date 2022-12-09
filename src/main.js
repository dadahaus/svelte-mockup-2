import locomotiveScroll from 'loco-scroll'
import App from './App.svelte'
const app = new App({
  target: document.getElementById('app')
})

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.08,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ?
      locoScroll.scrollTo(value, 0, 0) :
      locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".smooth-scroll").style.transform ?
    "transform": "fixed",
    });

const vw = (coef) => window.innerWidth * (coef / 100);
const vh = (coef) => window.innerHeight * (coef / 100);

const heroScroller = gsap.timeline({
      paused: true,
      scrollTrigger: {
    trigger: ".hero-header.h-2",
      scroller: ".smooth-scroll",
      pin: ".pin-wrapper",
      start: "top 0%",
        scrub: true,
        end: `${vh(100)}`,
      },
    });

heroScroller
  .to(
    ".hero-header.h-2", {
      scale: 1,
        y: vh(150),
      xPercent: 50,
      },
      "heroScroll"
      )
      .to(
          "#heroImage", {
            scaleY: 1.5,
          },
          "heroScroll"
          )
          .to(
            "#heroImage .image", {
              scaleX: 1.5,
              xPercent: 30,
            },
            "heroScroll"
          );

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

export default app