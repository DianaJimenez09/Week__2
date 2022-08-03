import { Book } from "./book";

const bookA = new Book(
  "Introduccion a Javascript",
  233,
  "2344433-BC23333",
  "Joseph Smith",
  "Now Editions"
);

console.log(bookA.getTitlle());
console.log(bookA.getNPages());
console.log(bookA.getIsbn());
console.log(bookA.getAuthor());
console.log(bookA.getEditorial());

bookA.toString();

bookA.setTitle("Ana Karenina");
bookA.setNPages(800);
bookA.setIsbn("9788484284925");
bookA.setAuthor("Leon Tolstoi");
bookA.setEditorial("Alba Editorial");

console.log(bookA.getTitlle());
console.log(bookA.getNPages());
console.log(bookA.getIsbn());
console.log(bookA.getAuthor());
console.log(bookA.getEditorial());
