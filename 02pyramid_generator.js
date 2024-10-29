/**Dynamically build a set of rows with padding and characters, 
 * creating either an inverted or standard structure based on the inverted boolean. */

/**The character used to build rows.
 * @type {string}*/
const character = "#";

/**The number of rows.
 * @type {number}*/
const count = 8;

/**An array to hold the rows.
 * @type {Array<string>}*/
const rows = [];

/**Determines if the rows should be inverted.
 * @type {boolean}*/
let inverted = true;

/**Pads a row with spaces and characters.
 * @param {number} rowNumber - The current row number.
 * @param {number} rowCount - The total number of rows.
 * @returns {string} The padded row.*/
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/**Loop through each row number from 1 to the total count*/
for (let i = 1; i <= count; i++) {
    if (inverted) {
        /**Add the new row to the beginning of the array if inverted.
         * @type {string}*/
        rows.unshift(padRow(i, count));
    } else {
        /**Add the new row to the end of the array otherwise.
         * @type {string}*/
        rows.push(padRow(i, count));
    }
}

/**Initialize an empty string to hold the final result.
 * @type {string}*/
let result = "";

/**Concatenate each row into the result string, separated by newlines.*/
for (const row of rows) {
    result = result + "\n" + row;
}

/**Output the final result to the console.*/
console.log(result);
