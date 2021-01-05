const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const coke: Drink = ['black', true, 30];

const carSpecs: [number, number] = [342, 5674];

const carStats: { horsepower: number, weight: number } = {
  horsepower: 400,
  weight: 34535
}

// const carStats: { horsepower: number, weight: number } = {
//   horsepower: 400,
//   weight: 34535
// }