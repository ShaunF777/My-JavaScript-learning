/**
 * Returns a random index within the bounds of the darkColorsArr array.
 * 
 * Note for new JavaScript learners:
 * - The function getRandomIndex is referenced without parentheses (getRandomIndex) when passing it as a value, 
 *   but when you want to execute the function and use its return value, you must use parentheses (getRandomIndex()).
 * - In the code, getRandomIndex() is called with parentheses to get a random index each time.
 * - If you use getRandomIndex without parentheses, you are passing the function itself, not its result.
 */

/**
 * The array of dark color hex codes.
 * @type {string[]}
 */
const darkColorsArr = [ // comma-separated list of colors
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

/**
 * Returns a random index within the bounds of the darkColorsArr array.
 * @returns {number} A random valid index for darkColorsArr.
 */
function getRandomIndex() {
  // Math.random() generates a random number between 0(inclusive) and 1(exclusive)
  // Multiplying by the length of the array gives a number between 0 and the length of the array
  // Math.floor() rounds down to the nearest whole number
  // This gives a random index between 0 and the last index of the array
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}
// camelCase is used for methods, function names and variables like querySelector, getRandomIndex and darkColorsArr
// PascalCase is used for class names like MyClass
/**
 * The body element of the document.
 * @type {HTMLElement}
 */
const body = document.querySelector("body");
/**
 * The span element where the background hex code will be displayed.
 * @type {HTMLElement}
*/
// getElementById("bg-hex-code") method could also be used
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code"); 

/**
 * Changes the background color of the body to a random color from darkColorsArr
 * and updates the displayed hex code.
 * @returns {void}
 */
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
/**
 * The button element that triggers the background color change.
 * @type {HTMLElement}
*/
// The button element is selected using its html # ID "btn"
// Get the button element from the DOM
const btn = document.querySelector("#btn"); // getElementById("btn") could also be used

// Pass changeBackgroundColor function as a value to the onclick property of the button
// This will call the function when the button is clicked
btn.onclick = changeBackgroundColor;