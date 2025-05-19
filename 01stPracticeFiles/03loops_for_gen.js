import { count, rows, padRow } from './02pyramid_generator.js'

/**Use different types of loops */
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}

result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);