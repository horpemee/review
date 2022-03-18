const leftArrow = document.querySelector(".arrow-left");
const RightArrow = document.querySelector(".arrow-right");
const button = document.querySelector(".surprise-btn");

//Load event listeners
// RightArrow.addEventListener("click", loadContent);
// leftArrow.addEventListener("click", loadContent);
//button.addEventListener("click", surpriseMe);

function loadContent(dir) {
  let elements = document.getElementsByClassName("active");

  let currentElement = elements[0];

  let currentElementId = currentElement.id;

  currentElementId = parseInt(currentElementId);

  let nextElementId = 0;

  if (dir == "left") {
    nextElementId = currentElementId - 1;

    if (nextElementId < 0) {
      nextElementId = 3;
    }
  } else if (dir == "right") {
    nextElementId = currentElementId + 1;

    if (nextElementId >= 4) {
      nextElementId = 0;
    }
  } else {
    nextElementId = Math.floor(Math.random() * 4);
    console.log(nextElementId);
  }

  // let nextElementId = currentElementId + 1;

  // if (nextElementId >= 4) {
  //   nextElementId = 0;
  // }

  let nextElement = document.getElementById(nextElementId);

  currentElement.style.display = "none";

  nextElement.style.display = "block";

  currentElement.classList.remove("active");

  nextElement.classList.add("active");
}
