const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"; //flatuicolors.com

function handleClick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();

function handleOnline() {
  console.log("now Online");
}
function handleOffline() {
  console.log("now Offline");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
