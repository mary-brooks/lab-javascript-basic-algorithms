// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.

const hacker1 = 'Brenda';

// 1.2 Print "The driver's name is XXXX".

console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.

const hacker2 = 'Mary';

// 1.4 Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`
  );
} else if (navigatorLength > driverLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  );
} else if (driverLength === navigatorLength) {
  console.log(
    `Wow, you both have equally long names, ${driverLength} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// Put driver's name in uppercase:
const driverUpperCase = hacker1.toUpperCase();

// Declare and initialise variable for spaced name:
let driverSpaced = '';

// Loop through the name, add each character to the new string with a space:
for (let i = 0; i < driverLength; i++) {
  driverSpaced += driverUpperCase[i] + ' ';
}

// Print to the console:
console.log(driverSpaced);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let navigatorReversed = '';

for (let i = navigatorLength - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}

console.log(navigatorReversed);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first, definitely.
// - What?! You both have the same name?

let nameOrder = hacker1.localeCompare(hacker2);

if (nameOrder < 0) {
  console.log("The driver's name goes first.");
} else if (nameOrder > 0) {
  console.log('Yo, the navigator goes first, definitely.');
} else if (nameOrder === 0) {
  console.log('What?! You both have the same name?');
}
