function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function(){
    return Object.values(this).every((line)=> line === this.a);
}

let square = new Square(10, 10, 10, 10);
console.log(square.isSquare()); // true
let square2 = new Square(1, 2, 1, 1);
console.log(square2.isSquare()); // false