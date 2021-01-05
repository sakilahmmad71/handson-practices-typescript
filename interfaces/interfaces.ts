const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summery(): string {
    return `Name is ${this.name}`
  }
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summery(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summery(): string {
    return `My dring has ${this.sugar}% sugar`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
    Name of vehicle: ${vehicle.name}
    Year of production: ${vehicle.year}
    Broken? ${vehicle.broken}
  `)
}

printVehicle(oldCivic);