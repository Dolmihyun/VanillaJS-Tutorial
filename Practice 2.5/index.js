if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalala");
} else {
  console.log("ho");
}

if (20 > 5 && "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}

true && true === true;
false && true === false;
true && false === false;
false && false === false;
true || true === true;
false || true === true;
true || false === true;
false || false === false;

//
const age = prompt("How old are you?");

if (age >= 19 && age <= 21) {
  console.log("You can drink but you should not");
} else if (age > 21) {
  console.log("Go ahead");
} else {
  console.log("Too young");
}
