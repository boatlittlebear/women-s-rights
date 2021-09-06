document.body.onscroll = function () {
  let scrollY = window.scrollY;
  let viewHeight = window.innerHeight;


  document.querySelector("#height").innerText = scrollY;
  document.body.style.setProperty("--scrollY", scrollY);
  document.body.style.setProperty("--h", scrollY / 10);

  let t1 = document.querySelector(".text:nth-of-type(1)").offsetTop;
  if (scrollY + viewHeight - 250 >= t1) {
    document.querySelector(".text:nth-of-type(1)").dataset.active = 1;
  } else {
    document.querySelector(".text:nth-of-type(1)").dataset.active = 0;
  }

  let t2 = document.querySelector(".text:nth-of-type(2)").offsetTop;
  if (scrollY + viewHeight - 250 >= t2) {
    document.querySelector(".text:nth-of-type(2)").dataset.active = 1;
  } else {
    document.querySelector(".text:nth-of-type(2)").dataset.active = 0;
  }

  let t3 = document.querySelector(".text:nth-of-type(3)").offsetTop;
  if (scrollY + viewHeight - 250 >= t3) {
    document.querySelector(".text:nth-of-type(3)").dataset.active = 1;
  } else {
    document.querySelector(".text:nth-of-type(3)").dataset.active = 0;
  }
};