let scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
  console.log(scroller.scrollTop);
});

scroller.addEventListener("scroll", event => {
});

