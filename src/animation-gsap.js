import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export function scrollAnimation(){
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let panels = gsap.utils.toArray(".panel"),
    scrollTween;
    function goToSection(i) {
        if(!i) block1Anim();
        else if(i === 1) block2Anim();
        else if(i === 2) block3Anim();
      scrollTween = gsap.to(window, {
      scrollTo: {y: i * window.innerHeight, autoKill: false},
      duration: 1, 
      onComplete: () => scrollTween = null,
      overwrite: true
        });
    }
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
      trigger: panel,
      start: "top bottom",
      end: "+=200%",
      onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
  ScrollTrigger.create({
    start: 0, 
    end: "max",
    snap: 1 / (panels.length - 1)
  })

  ScrollTrigger.normalizeScroll(true);
  goToSection();
}

function block1Anim(){
    const tl = gsap.timeline();
    tl.from(".block1__anim1", {y: 100, opacity: 0, duration: .3, delay: 1})
    .from(".block1__anim2", {y: 100, opacity: 0, duration: .4}, "-=0.2")
    .from(".block1__anim3", {y: 100, opacity: 0, duration: .4}, "-=0.2")
    .from(".block1__anim4", {y: 100, opacity: 0, duration: .4}, "-=0.2")
    .from(".block1__anim5", {y: 100, opacity: 0, duration: .4}, "-=0.2")
    .from(".block1__anim6", {y: 100, opacity: 0, duration: .4}, "-=0.2")
    .from(".block1__anim7", {scale: 0, opacity: 0, duration: 1}, "-=1")
    .from(".block1__anim8", {opacity: 0, duration: 2}, "-=1")
}
export function block2Anim(){
    const tl = gsap.timeline();
    tl.from(".block2__anim3", {x:-200, opacity: 0, duration: .4, delay: .3})
    .from(".block2__anim4", {x: 200, opacity: 0, duration: .4}, "-=0.3")
    .from(".block2__anim1", {x: -100, opacity: 1, duration: 1.5}, "-=0.6")
    .from(".block2__anim2", {y: 100, opacity: 0, duration: .4}, "-=1")
    
}
export function block3Anim(){
  const tl = gsap.timeline();
  tl.from(".block3__anim1", {x:-200, opacity: 0, duration: .4, delay: .3})
  .from(".block3__anim2", {x: 200, opacity: 0, duration: .4}, "-=0.3")
  .from(".block3__anim3", {opacity: 0, duration: .4}, "-=0.3")
  
}