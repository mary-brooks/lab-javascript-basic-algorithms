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

// Bonus 1

// Generate 3 paragraphs. Store the text in a new string variable named longText.

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nisl in velit posuere volutpat. Fusce eu enim sed orci vestibulum dapibus sit amet quis ipsum. Mauris in justo sagittis, hendrerit purus et, feugiat dolor. Suspendisse placerat sagittis mi id lacinia. Suspendisse a justo dignissim, luctus arcu ut, finibus nunc. Nam mattis rhoncus posuere. Nam porta suscipit erat, luctus porta leo varius quis. Nunc posuere sollicitudin purus eget laoreet. Donec non odio eu velit commodo facilisis. Nunc est risus, efficitur eget pretium et, fermentum eu velit. Morbi vel auctor quam. Vivamus purus ante, mollis eget consequat nec, vestibulum vel ligula. Cras elementum, magna ac elementum rhoncus, diam mi blandit quam, vitae vehicula turpis est vitae metus. Nullam cursus leo ex, vitae malesuada purus hendrerit eu. Aliquam eget aliquam tortor, eget porttitor justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sit amet molestie ligula. Vestibulum a bibendum lorem, ut aliquet urna. Fusce eget malesuada neque, non euismod ante. Nunc ligula dui, viverra at consectetur nec, lobortis a mauris. Ut eu enim sagittis, scelerisque justo nec, rutrum magna. Nullam sit amet rutrum massa. Duis fringilla aliquet dolor quis lacinia. In dictum est lorem, non imperdiet massa malesuada dapibus. Integer nec euismod urna. Suspendisse pellentesque cursus tellus, ut pulvinar est laoreet non. Aliquam nec eros ut felis ultrices porta quis ac libero. Etiam molestie augue sed ullamcorper sollicitudin. Maecenas maximus pellentesque tellus, sed semper dolor gravida sit amet. Morbi at nisl pharetra, placerat leo vel, pellentesque dolor. Curabitur venenatis risus ac justo pellentesque, eu congue nibh dapibus. Curabitur commodo quam nunc, ut dapibus velit varius at. Vivamus ex diam, consectetur vitae finibus vel, porttitor at velit. Cras magna ipsum, venenatis vitae porttitor non, tincidunt in lacus. Praesent pretium nibh eu aliquet pretium. Etiam auctor vulputate urna ac hendrerit. Pellentesque tempor velit ac posuere maximus. Quisque viverra, sapien scelerisque congue elementum, quam dui mattis nibh, vitae congue eros elit eu erat. Nullam sed arcu a felis vulputate feugiat id eu diam.';

// Make your program count the number of words in the string.

// Using a for loop:

let spaceCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ') {
    spaceCount++;
  }
}

const wordCount = spaceCount + 1;

console.log(wordCount);

// Using .split()

const wordArray = longText.split(' ');
console.log(wordArray.length);

// Make your program count the number of times the Latin word et appears.

let etCount = 0;

for (let i = 0; i < wordArray.length; i++) {
  if (
    wordArray[i] === 'et' ||
    wordArray[i] === 'et.' ||
    wordArray[i] === 'et,'
  ) {
    etCount++;
  }
}

console.log(etCount);

// Bonus 2

// Create a new variable, phraseToCheck, containing some string value.
// Write a code to check if the value assigned to this variable is a Palindrome.

const phraseToCheck = 'Was it a car or a cat I saw?';

const strOfLetters = phraseToCheck.replace(/[ !,.'?]/g, '');
const phraseForwards = strOfLetters.toLowerCase();

let phraseBackwards = '';

for (let i = phraseForwards.length - 1; i >= 0; i--) {
  phraseBackwards += phraseForwards[i];
}

if (phraseForwards === phraseBackwards) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
