$(document).ready(function () {
  new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.2,
    image1: "./assets/images/01.png",
    image2: "./assets/images/02.png",
    displacementImage: "./assets/images/diss.png",
    imagesRatio: 380 / 300,
  });

  gsap
    .timeline()
    .from(".links li", {
      y: "100%",
      opacity: 0,
      ease: Expo.easeInOut,
      stagger: 0.5,
    });

  gsap
    .timeline()
    .to(".overlay", {
      top: "-100%",
      ease: Expo.easeInOut,
      zIndex: "-1",
      stagger: .2
    })
    .from(".content h1 .hidetext", {
      y: "100%",
      duration: 0.9,
      opacity: 0,
      ease: Expo.easeInOut,
    })
    .from(
      ".content h3",
      {
        x: "-100%",
        duration: 1.2,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      "-=1"
    )
    .from(".content h2 .hidetext", {
      y: "100%",
      duration: 0.9,
      opacity: 0,
      ease: Expo.easeInOut,
    }, "1")
    .from(".content p .hidetext", {
      y: "100%",
      duration: 0.9,
      opacity: 0,
      ease: Expo.easeInOut,
    });
});
