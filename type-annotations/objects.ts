const profile = {
  name: 'sakil',
  age: 20,
  coords: {
    lat: 0,
    lng: 12
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;