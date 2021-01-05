const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
}

function devide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a - b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const throwErrorNotSure = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
}

const throwMessageError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.weather)
}

const distructuredWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(weather)
}