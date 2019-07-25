const title = document.getElementById("title");

console.log(title);
console.error("an Error");

console.dir(title);
title.style.color = "black";
// changes original HTML title into new one
title.innerHTML = "The title changed by JS.";

console.dir(document);
document.title = "New-page title";
const title2 = document.querySelector("#title");
console.log(title2);
// DOM: Document Object Module --- changes all HTML elements into Objects

//
function handleResize(event) {
  console.log("The page has been resized.");
  console.log(event);
}

function handleClick() {
  title.style.color = "orange";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
