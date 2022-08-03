import { Vector } from "./vector";

let vectorX = new Vector(4, 3);
let vectorY = new Vector(5, 2);

vectorX.print();
vectorY.print();

console.log(vectorX.add(vectorY));
console.log(vectorX.subs(vectorY));
console.log(vectorX.mult(vectorY));
console.log(vectorX.multNumber(4));
