//1
const m = [1,2,3,4,5,6,"hh", "9",80,100];
m.splice(6,1);
const mSquared = m.map(x => {
  return x**2
  })
console.log(mSquared)

//2
let string =" High knowledge, high return";
let array = [...string]; 
const result = array.split(" ");
const result1 = result.map(x => {
    return x.toLowerCase();
  });
console.log(result1)


//3
class Shape {
    constructor(Perimeter, Area) {
        this.Perimeter = Perimeter;
        this.Area= Area;
    }
}

class Rectangle extends Shape {
    constructor(Perimeter, Area, length, width) {
        super (Perimeter, Area)
        this.length=length;
        this.width=width;
    }

    GetShapeType() {
        console.log("Rectangle")
    }

    GetPerimeter(){
        console.log("Perimeter of this rectangle is", 2*(this.length + this.width))
    }

    GetArea() {
        console.log("Area of this rectangle is", this.length * this.width)
    }
}

class Square extends Shape {
    constructor(Perimeter, Area, side) {
        super (Perimeter, Area)
        this.side=side;
    }

    GetShapeType() {
        console.log("Square")
    }

    GetPerimeter(){
        console.log("Perimeter of this Square is", 4*this.side)
    }

    GetArea() {
        console.log("Area of this Square is", this.side**2)
    }
}


class Triangle extends Shape {
    constructor(Perimeter, Area, leg1, leg2, leg3) {
        super (Perimeter, Area)
        this.leg1 = leg1;
        this.leg2 = leg2;
        this.leg3 = leg3;
    }

    GetShapeType() {
        console.log("Triangle")
    }

    GetPerimeter(){
        console.log("Perimeter of this Triangle is", this.leg1 + this.leg2 + this.leg3)
    }

    GetArea() {
        let s = (this.leg1 + this.leg2 + this.leg3)/2;
        console.log("Area of this Triangle is", Math.sqrt(s*(s-this.leg1)*(s-this.leg2)*(s-this.leg3)))
    }
}

class Circle extends Shape {
    constructor(Perimeter, Area, radius) {
        super (Perimeter, Area)
        this.radius=radius;
    }

    GetShapeType() {
        console.log("Circle")
    }

    GetPerimeter(){
        console.log("Perimeter of this Circle is", 2*this.radius.Math.PI)
    }

    GetArea() {
        console.log("Area of this Circle is", Math.PI*this.radius**2)
    }
}


const rect = new Rectangle (0,0,5,2)
rect.GetPerimeter();
const square = new Square (0,0,5)
square.GetArea();
const tri = new Triangle (0,0,5,6,7)
tri.GetArea();
const cir = new Circle (0,0,5)
cir.GetArea();




