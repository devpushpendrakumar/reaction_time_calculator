// Function to change box color and display reaction time.
const colorChanger = () => {
  timeBoard.classList.remove("color-change");
  void timeBoard.offsetWidth;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = randomColor;
  endTime = Date.now();
  const timeTaken = endTime - startTime;
  startTime = Date.now(); // Reset start time for the next click
  const text = `Latest reaction Time: ${(timeTaken / 1000).toFixed(2)} seconds`;
  timeBoard.textContent = text;
  timeBoard.classList.add("color-change");
};

let startTime = Date.now();
let endTime;

const box = document.getElementById("box");
box.addEventListener("click", colorChanger);

const timeBoard = document.getElementById("time-board");

console.log("Script added");
