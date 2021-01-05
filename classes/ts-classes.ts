class Road {
  constructor(public color: string) {
    this.color = color;
  }

  protected stop(): void {
    console.log(`Stop here light is ${this.color}`);
  }
}

class Cars extends Road {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('Driving driving');
    console.log(this.stop());
  }

  private horn(): void {
    console.log('Beep beep');
  }

  startDriving(): void {
    console.log(this.horn());
  }
}

const cars: Cars = new Cars(4, 'blue');

cars.drive();