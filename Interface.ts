interface Vehicle {
  start(): void;
  stop(): void;
  getInfo(): string;
}

class Car implements Vehicle {
  constructor(private brand: string, private model: string) {}

  start(): void {
    console.log('Car started');
  }

  stop(): void {
    console.log('Car stopped');
  }

  getInfo(): string {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.start();
console.log(myCar.getInfo());
myCar.stop();