// Create a function called highAndLow that accepts string with numbers separated by space
// and return string with the hightest and lowest number separated by space
// if input is invalid return null
// if two numbers cannot be found return null
// example: highAndLow("1 2 3 4 5"); // return "5 1"

function highAndLow(input: string | null | undefined): string | null {
  if (typeof input !== 'string' || input.trim() === '') return null;

  const charctersArray = input.trim().split(' ');

  if (charctersArray.length < 2) return null;

  const filteredArray = charctersArray.filter((item) => !isNaN(Number(item)));

  if (filteredArray.length < 2) return null;

  //const sortedArray = charctersArray.sort((a, b) => a - b);
  //const firstElement = sortedArray[0];
  //const lastElement = sortedArray[sortedArray.length - 1];

  const convertedToNumbersArray = filteredArray.map((item) => Number(item));

  const firstElement = Math.min(...convertedToNumbersArray);
  const lastElement = Math.max(...convertedToNumbersArray);

  //console.log('returned', [lastElement, firstElement].join(' '));
  return `${lastElement} ${firstElement}`;
}

const t0 = performance.now();
highAndLow(
  '8 3 -5 42 -1 0 0 -9 4 7 4 -4 8 3 -5 42 -1 0 0 -9 4 7 4 -4 8 3 -5 42 -1 0 0 -9 4 7 4 -4 8 3 -5 42 -1 0 0 -9 4 7 4 -4'
);
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// Do not edit, console.logs provided to check if function works

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4') === '42 -9');
console.log(highAndLow('1 2 3') === '3 1');
console.log(highAndLow('1 -5 3 0 4') === '4 -5');
console.log(highAndLow('1 10') === '10 1');
console.log(highAndLow('10 1') === '10 1');
console.log(highAndLow('') === null);
console.log(highAndLow(null) === null);
console.log(highAndLow(undefined) === null);
console.log(highAndLow(1) === null);
console.log(highAndLow('1') === null);

// additional check
console.log(highAndLow('2 a b 5 4') === '5 2');
