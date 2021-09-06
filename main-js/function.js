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

  let a1 = document.querySelector(".cartoon:nth-of-type(3)").offsetTop;
  if (scrollY + viewHeight - 500 >= a1) {
    document.querySelector(".cartoon:nth-of-type(3)").src="img/cartoon/artwork-3.2.png";
  } else {
    document.querySelector(".cartoon:nth-of-type(3)").src="img/cartoon/artwork-3.1.png"
  }
  if (scrollY + viewHeight - 550 >= a1) {
    document.querySelector(".cartoon:nth-of-type(3)").src="img/cartoon/artwork-3.3.png";
  }

  let s1 = document.querySelector(".slider").offsetTop;
  if (scrollY + viewHeight - 80 >= s1) {
    document.querySelector(".slider").dataset.active = 1;
  } else {
    document.querySelector(".slider").dataset.active = 0;
  }
};

/*slide*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
/*slide*/
