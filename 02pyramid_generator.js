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
