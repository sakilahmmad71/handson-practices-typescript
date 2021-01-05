let apples: number = 10;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let none: undefined = undefined;

// biuld in object
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let oranges: number[] = [12, 13, 4, 67, 78];
let truths: boolean[] = [true, false, false, true];

// classes
class Car { }
let car: Car = new Car();

// objects
let points: { x: number, y: number } = {
  x: 10,
  y: 20
}

// functions -> and it's disguting man!
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
}

// when to use annotations
// (1)
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);

// (2)
let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// (3)
let numbers = [-1, 10, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
