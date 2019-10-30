"use strict";
window.addEventListener("DOMContentLoaded", loadSVG);
let selectedColor;
//Fetch the SVG file in HTML
//------------------------------------------------------
async function loadSVG() {
  const response = await fetch("coloringBook.svg");
  const svgData = await response.text();

  document.querySelector("#placeSvg").innerHTML = svgData;
  registerEventListeners();
}
//Function for all event listeners
//------------------------------------------------------
function registerEventListeners() {
  document.querySelector("#shapes").addEventListener("click", clickShape);
  document.querySelector("#colors").addEventListener("click", clickColor);
}
//Function to get the clicked color
//------------------------------------------------------
function clickColor(event) {
  const target = event.target;
  selectedColor = target.style.fill;
}
//Function to color the shape with selected color
//------------------------------------------------------
function clickShape(event) {
  const target = event.target;
  let pasteColor = selectedColor;
  target.style.fill = pasteColor;
}
