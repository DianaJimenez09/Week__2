export class Book {
  private title: string;
  private nPages: number;
  private isbn: string;
  private author: string;
  private editorial: string;

  constructor(
    title: string,
    npages: number,
    isbn: string,
    author: string,
    editorial: string
  ) {
    this.title = title;
    this.nPages = npages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
  }
  /////////
  //GETTERS
  /////////
  public getTitlle(): string {
    return this.title;
  }

  public getNPages(): number {
    return this.nPages;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getEditorial(): string {
    return this.editorial;
  }
  /////////
  //SETTERS
  /////////

  public setTitle(nuevoTitle: string): void {
    this.title = nuevoTitle;
  }

  public setNPages(nuevoNPages: number): void {
    this.nPages = nuevoNPages;
  }

  public setIsbn(nuevoIsbn: string): void {
    this.isbn = nuevoIsbn;
  }

  public setAuthor(nuevoAuthor: string): void {
    this.author = nuevoAuthor;
  }

  public setEditorial(nuevoEditorial: string): void {
    this.editorial = nuevoEditorial;
  }

  public toString(): void {
    console.log(`Title - ${this.title}`);
    console.log(`Number of Pages - ${this.nPages}`);
    console.log(`ISBN - ${this.isbn}`);
    console.log(`Author - ${this.author}`);
    console.log(`Editorial - ${this.editorial}`);
  }
}
