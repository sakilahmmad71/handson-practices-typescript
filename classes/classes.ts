class Vehicle {
  drive(): void {
    console.log('Car is driving');
  }

  honk(): void {
    console.log('Beep beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Driving driving');
  }
}

const car: Car = new Car();