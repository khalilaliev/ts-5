interface IContentsOfFigures {
  readonly name: string;
  readonly color: string;
  calculateArea: (side1: number, side2: number) => number;
}

class Circle implements IContentsOfFigures {
  readonly name: string;
  readonly color: string;
  public radius: number;
  constructor(name: string, color: string, radius: number) {
    this.name = name;
    this.color = color;
    this.radius = radius;
  }

  calculateArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
  }
}

const circle = new Circle("Circle", "Red", 12);
console.log(circle.calculateArea());

class Rectangle implements IContentsOfFigures {
  readonly color: string;
  readonly name: string;
  public width: number;
  public height: number;
  constructor(name: string, color: string, width: number, height: number) {
    this.name = name;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    const area = this.width * this.height;
    return area;
  }
  print(): string {
    return "Area of rectangle = length * width";
  }
}

const rectangle = new Rectangle("Rectangle", "Green", 22, 11);
console.log(rectangle.calculateArea());

class Square implements IContentsOfFigures {
  readonly name: string;
  readonly color: string;
  public side: number;
  constructor(name: string, color: string, side: number) {
    this.name = name;
    this.color = color;
    this.side = side;
  }

  calculateArea(): number {
    const squareArea = this.side * this.side;
    return squareArea;
  }
  print(): string {
    return "Area of a square = Side * Side = S2";
  }
}

const square = new Square("Square", "Yellow", 23);
console.log(square.calculateArea());
console.log(square.print());

class Triangle implements IContentsOfFigures {
  readonly name: string;
  readonly color: string;
  public base: number;
  public height: number;
  constructor(name: string, color: string, base: number, height: number) {
    this.name = name;
    this.color = color;
    this.base = base;
    this.height = height;
  }
  calculateArea(): number {
    const squareTriangle = 0.5 * this.base * this.height;
    return squareTriangle;
  }
}

const triangle = new Triangle("Triangle", "Green", 23, 11);
console.log(triangle.calculateArea());
