/**Arrays also have a .shift() method. This will remove the first element of the array, 
 * unlike .pop() which removes the last element. */
const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted); // 1
/**The .unshift() method of an array allows you to add a value to the beginning of the array, 
 * unlike .push() which adds the value at the end of the array.
 * .unshift() returns the new length of the array it was called on. */
const unshifted = numbers.unshift(5);
console.log(unshifted); // 3
console.log(numbers); // [5, 2, 3]
