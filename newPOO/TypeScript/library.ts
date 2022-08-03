import { Book } from "./book";

export class Library {
  private books: Book[];
  private address: string;
  private manager: string;

  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }
  /////////
  //GETTERS
  /////////

  public getAddress() {
    return this.address;
  }

  public getManager() {
    return this.manager;
  }

  /////////
  //SETTERS
  /////////

  public setAddress(nuevoAddress: string) {
    this.address = nuevoAddress;
  }

  public setManager(nuevoManager: string) {
    this.manager = nuevoManager;
  }

  public toString(): void {
    let book;
    for (let i = 0; i < this.books.length; i++) {
      book = this.books[i].toString();
    }
    return book;
  }

  getNumberOfBooks(): number {
    return this.books.length;
  }

  public findByAuthor(author: string): Book[] {
    let autor: string;
    let autores = [];
    for (let i = 0; i < this.books.length; i++) {
      autor = this.books[i].getAuthor();
      if (autor == author) {
        autores.push(this.books[i]);
      }
    }
    return autores;
  }
}
