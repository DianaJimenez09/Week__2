import { Personn } from "./Personn";

let personA = new Personn("Rosa", 28, "Madrid");

personA.printName();
console.log(personA.yearOfBirth(2022));
personA.setAddress("Barcelona");
console.log(personA.getAddress());
