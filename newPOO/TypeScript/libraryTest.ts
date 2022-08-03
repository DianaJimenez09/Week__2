import { Library } from "./library";
import { Book } from "./book";

let book1 = new Book(
  "Introducción a Javascript",
  233,
  "2344433-BC23333",
  "Joseph Smith",
  "Now Editios"
);
let book2 = new Book(
  "Ana Karenina",
  800,
  "97884842849252",
  "Leon Tolstoi",
  "Alba Editorial"
);
let book3 = new Book(
  "El gran Gatsby",
  176,
  "9788418395185",
  "F.Scott Fitzgerald",
  "Alma"
);

let library1 = new Library([book1, book2, book3], "av Seneca, s/n", "X");
let library2 = new Library([book2, book3], "Gran Via,47", "Y");
let library3 = new Library([book1, book3], "C/Princesa, 1", "Z");

// console.log(library1);
console.log(library1.getAddress());
console.log(library1.getManager());

console.log(library1.getNumberOfBooks());

console.log(library2.getAddress());
console.log(library2.getManager());

console.log(library2.toString());

console.log(library3.getAddress());
console.log(library3.getManager());

console.log(library3.findByAuthor("F.Scott Fitzgerald"));

library1.toString();
