// const container = document.getElementById("container");

// console.log(container);

// container.style.backgroundColor = "orange";

const img = document.getElementById("container");

function makeSmall() {
  img.style.height = "0px";
  img.style.width = "0px";
}

function makeNormal() {
  img.style.height = "200px";
  img.style.width = "200px";
}

function makeBig() {
  img.style.height = "300px";
  img.style.width = "300px";
}

console.log(img);

function start() {
  return true;
}
start();

const greeting = "hello world";

console.log(greeting);

// if (3 % 2 === 0) {
//   document.body.style.backgroundColor = "orange";
// } else {
//   document.body.style.backgroundColor = "blue";
// }