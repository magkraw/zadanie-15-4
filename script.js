const hello = 'Hello';
const world = 'World';
const helloWorld = () => console.log(`${hello} ${world}!`);

helloWorld();

const multiply = (x, y = 1) => x * y;

console.log(multiply(9, 9));
console.log(multiply(9));

const average = (...numbers) => numbers.reduce((prev, curr) => prev + curr) / numbers.length;

console.log(average(1, 2, 3, 5));
console.log(average(1, 2, 37, 5434, 5, 90));

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(firstname, lastname);
