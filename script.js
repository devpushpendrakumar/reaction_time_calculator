// Function to change box color and display reaction time.
const colorChanger = () => {
  console.log(hidden);
  if (hidden) {
    box.classList.add("hidden");
    const timeDelay = randomNumber(0, 1500);
    setTimeout(() => {
      void box.offsetWidth;
      box.classList.remove("hidden");
      startTime = Date.now();
      hidden = false;
    }, timeDelay);
    box.style.left = `${randomNumber(0, 350) + 25}px`;
    box.style.top = `${randomNumber(0, 200) + 25}px`;
  } else {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
    endTime = Date.now();
    responseTime = ((endTime - startTime) / 1000).toFixed(2);
    console.log(responseTime);
    hidden = true;
    timeBoard.classList.remove("color-change");
    void timeBoard.offsetHeight;
    timeBoard.classList.add("color-change");
    timeBoard.innerText = `Your latest reaction time is ${responseTime} seconds`;
  }
};

let startTime = Date.now();
let endTime;
let responseTime;
let hidden = false;

const box = document.getElementById("box");
box.addEventListener("click", colorChanger);

const timeBoard = document.getElementById("time-board");

console.log("Script added");
// Helper functions

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
