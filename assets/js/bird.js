

let tl = gsap.timeline();

gsap.defaults({ ease: "back.out(2)" });
tl.set("#rightWing", { transformPerspective: 200 });
tl.to("#tail", {
  duration: 1,
  repeat: -1,
  yoyo: true,
  rotation: -15,
  transformOrigin: "90% left"
});

tl.to(
  "#rightWing",
  {
    duration: 1,
    repeat: -1,
    yoyo: true,
    transformOrigin: "0% 0% -100px",
    rotationZ: -5
  },
  "<"
);
tl.to(
  "#leftWing",
  {
    duration: 1,
    repeat: -1,
    yoyo: true,
    rotation: 10,
    transformOrigin: "center right"
  },
  "<"
);

tl.to(
  "#neckFront,#neckBack",
  {
    duration: 1,
    rotation: 10,
    repeat: -1,
    transformOrigin: "bottom right",
    yoyo: true
  },
  "<"
);

tl.to(
  "#beakFront,#beakBack",
  {
    duration: 1,
    xPercent: 75,
    repeat: -1,
    svgOrigin: "40% 60%",
    yoyo: true
  },
  "<"
);