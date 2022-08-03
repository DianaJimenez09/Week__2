import { Personn } from "./Personn";

export class Contacts {
  public people: Personn[];

  constructor() {
    this.people = [];
  }

  public printCalendar(): void {
    console.log(this.people);
  }
}
