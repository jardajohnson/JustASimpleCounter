"use strict";
// DOM variables
let countNumber = 0;
let decrementButton = document.querySelector(".btn-1");
let clearButton = document.querySelector(".btn-2");
let incrementButton = document.querySelector(".btn-3");
let displayCount = document.querySelector(".count");
let currentCountDisplayed = (document.querySelector(".count").textContent =
  countNumber);

// Event Functions
const decrementCount = () => {
  countNumber--;
  displayCount.textContent = countNumber;
};
const clearCount = () => {
  countNumber = 0;
  displayCount.textContent = countNumber;
};
const incrementCount = () => {
  countNumber++;
  displayCount.textContent = countNumber;
};

// Button event listeners
decrementButton.addEventListener("click", decrementCount);
clearButton.addEventListener("click", clearCount);
incrementButton.addEventListener("click", incrementCount);
