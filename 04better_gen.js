/**Dynamically build a set of rows with padding and characters, 
 * creating either an inverted or standard structure based on the inverted boolean. */

import { count, rows, inverted, padRow } from './02pyramid_generator.js'

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
