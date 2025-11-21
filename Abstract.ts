abstract class Shape {
  abstract getArea(): number;

  displayArea(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea(): number {
    return this.side * this.side;
  }
}

const circle = new Circle(5);
const square = new Square(4);

circle.displayArea();
square.displayArea(); 