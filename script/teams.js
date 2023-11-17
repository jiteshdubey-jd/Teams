const header = document.getElementById("navbar-header");
let lastScroll = 0;
var r = document.querySelector(":root");
window.addEventListener("scroll", () => {
  const currScroll = document.documentElement.scrollTop || window.scrollY;

  if (currScroll <= 10) {
    console.log("run");
    header.classList.remove("scrollup");
    header.classList.add("scrolldown");
    r.style.setProperty("--hover-navbar", "white");
  }

  if (currScroll <= 650 && currScroll >= 10) {
    header.classList.remove("scrollup");
    header.classList.add("scrolldown");
    r.style.setProperty("--hover-navbar", "white");
  }

  if (
    currScroll > lastScroll &&
    currScroll > 500 &&
    !header.classList.contains("scrolldown")
  ) {
    header.classList.remove("scrollup");
    header.classList.add("scrolldown");
    r.style.setProperty("--hover-navbar", "black");
  }

  if (currScroll < lastScroll && header.classList.contains("scrolldown")) {
    header.classList.remove("scrolldown");
    header.classList.add("scrollup");
    r.style.setProperty("--hover-navbar", "black");
  }

  lastScroll = currScroll;
});
// ---------------------cards-----------------------

const array = [
  "#feff86",
  "#e3dffd",
  "#ffe6e6",
  "#ea99d5",
  "#d6e5fa",
  "#c1ffd7",
  "#fcd1d1",
  "#ffebb4",
  "#fd8a8a",
  "#d5ebda",
  "#fbd3d3",
  "#efddf4",
  "#52ab98",
  "#fae5df",
  "#f5cac2",
  "#d1adcc",
  "#eddcd9",
];
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

const box = document.querySelectorAll("#box");
for (i = 0; i < box.length; i++) {
  box[i].style.backgroundColor = getRandomItem(array);
}
// -------------------------------card-----------------------------

let controller = document.querySelectorAll("#prog_box");
[...controller].forEach((prog_box) => {
  prog_box.addEventListener("click", function () {
    prog_box.classList.toggle("active");
  });
});

let control = document.querySelectorAll("#dep_box");
[...control].forEach((dep_box) => {
  dep_box.addEventListener("click", function () {
    dep_box.classList.toggle("active");
  });
});
// -------------------------------card-----------------------------

var tl = gsap.timeline();
var a = 0;
time = () => {
  setInterval(function () {
    a = a + Math.floor(Math.random() * 15);
  }, 100);
};
time();

const races = document.querySelector("#container");
function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return -(racesWidth * 1.05 - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});
ScrollTrigger.create({
  trigger: "#page3",
  start: "top top",
  end: () => `+=${getScrollAmount() * -1.2}`,
  pin: true,
  animation: tween,
  scrub: 1,
  markers: false,
});

// --------------------------------------------------------------------------
("use strict");
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// -----------------------------------------------------//
