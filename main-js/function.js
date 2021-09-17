let scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

let t = document.querySelector(".page-2 > .text").offsetTop;

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
  output2.textContent = `T1Top: ${t1}`;
});

scroller.addEventListener("scroll", event => {
  if (scroller.scrollTop >= 0) {
    document.querySelector(".page-1 > .cartoon").style.animationPlayState = "running";
  } else {
    document.querySelector(".page-1 > .cartoon").style.animationPlayState = "paused";
  }

  if (scroller.scrollTop >= 969) {
    document.querySelector(".page-2 > .text").dataset.active = 1;
  } else {
    document.querySelector(".page-2 > .text").dataset.active = 0;
  }

  if (scroller.scrollTop >= 1938) {
    document.querySelector(".page-3 > .text").dataset.active = 1;
  } else {
    document.querySelector(".page-3 > .text").dataset.active = 0;
  }

  if (scroller.scrollTop >= 2907) {
    document.querySelector(".page-4 > .text").dataset.active = 1;
  } else {
    document.querySelector(".page-4 > .text").dataset.active = 0;
  }

  if (scroller.scrollTop >= 3876) {
    document.querySelector(".page-5 > .text").dataset.active = 1;
  } else {
    document.querySelector(".page-5 > .text").dataset.active = 0;
  }

  if (scroller.scrollTop >= 4845) {
    document.querySelector(".page-6 > .cartoon").style.animationPlayState = "running";
  } else {
    document.querySelector(".page-6 > .cartoon").style.animationPlayState = "paused";
  }

  if (scroller.scrollTop >= 5814) {

  } else {

  }

  if (scroller.scrollTop >= 6783) {
    document.querySelector(".page-8 > .text").dataset.active = 1;
  } else {
    document.querySelector(".page-8 > .text").dataset.active = 0;
  }
  
  if (scroller.scrollTop >= 7752) {
    document.querySelector(".page-9 > .text").dataset.active = 1;
  } else {
    document.querySelector(".page-9 > .text").dataset.active = 0;
  }
});

