/**Dynamically build a set of rows with padding and characters, 
 * creating either an inverted or standard structure based on the inverted boolean. */

/**The character used to build rows.
 * @type {string}*/
export const character = "#";

/**The number of rows.
 * @type {number}*/
export const count = 8;

/**An array to hold the rows.
 * @type {Array<string>}*/
export const rows = [];

/**Determines if the rows should be inverted.
 * @type {boolean}*/
export let inverted = true;

/**Pads a row with spaces and characters.
 * @param {number} rowNumber - The current row number.
 * @param {number} rowCount - The total number of rows.
 * @returns {string} The padded row.*/
export function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) 
    + " ".repeat(rowCount - rowNumber);
}

/**
 * Generates a pyramid or inverted pyramid of characters.
 * @param {number} rowCount - The total number of rows in the pyramid.
 * @param {string} char - The character to use for building the pyramid.
 * @param {boolean} inverted - Whether to invert the pyramid.
 * @returns {string[]} An array of strings, each representing a row of the pyramid.
 */
export function generatePyramid(rowCount, char, inverted) {
  const rows = [];
  for (let i = 1; i <= rowCount; i++) {
    const rowNumber = inverted ? rowCount - i + 1 : i;
    rows.push(
      " ".repeat(rowCount - rowNumber) +
      char.repeat(2 * rowNumber - 1) +
      " ".repeat(rowCount - rowNumber)
    );
  }
  return rows;
}

// Usage example: Standard pyramid
generatePyramid(5, "#", false);

// Usage example: Inverted pyramid
generatePyramid(5, "#", true);