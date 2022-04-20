let slides = document.querySelectorAll(".slide");
let slidesArray = Array.from(slides);

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let prevnext = () => {
  let activeSlide = document.querySelector(".slide.active");
  let currentIndex = slidesArray.indexOf(activeSlide);

  let prev;
  let next;

  if (currentIndex == 0) {
    prev = slidesArray[slidesArray.length - 1];
  } else {
    prev = slidesArray[currentIndex - 1];
  }
  if (currentIndex == slidesArray.length - 1) {
    next = slidesArray[0];
  } else {
    next = slidesArray[currentIndex + 1];
  }

  return [prev, next];
};

let koijabo = () => {
  let activeSlide = document.querySelector(".slide.active");
  let currentIndex = slidesArray.indexOf(activeSlide);

  let [prev, next] = prevnext();

  slidesArray.map((slide, index) => {
    if (currentIndex == index) {
      slide.style.transform = "translateX(0)";
    } else if (slide == prev) {
      slide.style.transform = "translateX(-100%)";
    } else if (slide == next) {
      slide.style.transform = "translateX(100%)";
    }
    slide.addEventListener("transitionend", function () {
      slide.classList.remove("smooth");
    });
  });
};

koijabo();

next.addEventListener("click", function () {
  let activeSlide = document.querySelector(".slide.active");
  let [next] = prevnext();
  activeSlide.classList.remove("active");
  activeSlide.classList.add("smooth");
  next.classList.add("smooth");
  activeSlide.style.transform = "translateX(100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";

  koijabo();
});

prev.addEventListener("click", function () {
  let activeSlide = document.querySelector(".slide.active");
  let [next, prev] = prevnext();
  activeSlide.classList.remove("active");
  activeSlide.classList.add("smooth");
  prev.classList.add("smooth");
  activeSlide.style.transform = "translateX(100%)";
  prev.classList.add("active");
  next.style.transform = "translateX(0)";
  koijabo();
});
//let count = 1;
//setInterval(function () {
//document.querySelectorAll(".slide" + count).checked = true;
//count++;
// if (count > 3) {
//count = 1;
// }
//}, 300);

//let stop = setInterval(function () {
//koijabo();
//}, 300);
//let count = 1;
//function num() {
//count++;
//if (currentIndex == count) {

//setInterval(function () {
//num();
//}, 50);
// ) {

//}
function num() {
  let activeSlide = document.querySelector(".slide.active");
  let [next] = prevnext();
  activeSlide.classList.remove("active");
  activeSlide.classList.add("smooth");
  next.classList.add("smooth");
  activeSlide.style.transform = "translateX(100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";
  koijabo();
}
setInterval(function () {
  num();
}, 2000);
