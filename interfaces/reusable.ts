const newCivik = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summery(): string {
    return `Name is ${this.name}`
  }
}

interface Reportable {
  summery(): string;
}

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summery(): string {
    return `My dring has ${this.sugar}% sugar`
  }
}

const printSummery = (item: Reportable): void => {
  console.log(item.summery())
}

printSummery(oldCivic);
printSummery(drinks);