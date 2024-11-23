const square = document.getElementById("square");
const container = document.getElementById("container");

let movingDown = true;

function animateSquare() {
  const squareHeight = square.offsetHeight;
  const containerHeight = container.offsetHeight;

  if (movingDown) {
    square.style.top = `${containerHeight - squareHeight}px`;
  } else {
    square.style.top = "0";
  }

}

setInterval(animateSquare, 2000);