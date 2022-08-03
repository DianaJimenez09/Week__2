import { Person } from "./Personn";
import { Contacts } from "./contacts";

const person1 = new Person("Maria", 25, "Malaga");
const person2 = new Person("Joel", 30, "Mallorca");
const person3 = new Person("Andrea", 32, "Roma");

let contacts = new Contacts();

contacts.people.push(person1, person2, person3);
