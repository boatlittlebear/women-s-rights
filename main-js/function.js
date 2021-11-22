let scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});

scroller.addEventListener("scroll", event => {
  if (paper1.getBoundingClientRect().top-window.innerHeight < 0) {
    paper1.style.opacity = "1";
  }

  if (paper2.getBoundingClientRect().top-window.innerHeight < 0) {
    paper2.style.opacity = "1";
  }

  if (paper3.getBoundingClientRect().top-window.innerHeight < 0) {
    paper3.style.opacity = "1";
  }

  if (paper4.getBoundingClientRect().top-window.innerHeight < 0) {
    paper4.style.opacity = "1";
  }

  if (paper5.getBoundingClientRect().top-window.innerHeight < 0) {
    paper5.style.opacity = "1";
  }

  if (paper6.getBoundingClientRect().top-window.innerHeight < 0) {
    paper6.style.opacity = "1";
  }

  if (paper7.getBoundingClientRect().top-window.innerHeight < 0) {
    paper7.style.opacity = "1";
  }

  if (paper8.getBoundingClientRect().top-window.innerHeight < 0) {
    paper8.style.opacity = "1";
  }

  if (paper9.getBoundingClientRect().top-window.innerHeight < 0) {
    paper9.style.opacity = "1";
  }

  if (paper10.getBoundingClientRect().top-window.innerHeight < 0) {
    paper10.style.opacity = "1";
  }
});

