
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

Shery.mouseFollower();





Shery.makeMagnet("#pix , a , button")



Shery.hoverWithMediaCircle(".vid", {videos: ["resource/ko.mp4"] });


gsap.to(".imd", {
     scrollTrigger: {
            trigger:"#abottom",
            // pin: true,
        
            start: "top top",
            end: "bottom bottom",
            endTrigger:".last",
            scrub: 2
            } ,
            y: "-300%",
            ease: Power1
        })

        gsap.to(".afirst", {
            scrollTrigger: {
              trigger: "#abottom",
              pin: true,
              start: "top top",
              end: "bottom bottom",
              endTrigger: ".lask",
              scrub: 2,
            },
            y: "-300%",
            ease: Power1,
          });
   

