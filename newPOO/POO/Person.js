class Person {
  constructor(colorPelo, colorOjos, peso, altura, anyoNacimiento, hobbies) {
    this.colorPelo = colorPelo;
    this.colorOjos = colorOjos;
    this.width = peso;
    this.height = altura;
    this.yearOfBirth = anyoNacimiento;
    this.hobbies = hobbies;
  }

  calcIMC() {
    return this.width / (this.height * this.height);
  }

  calcEdad() {
    const currentYear = new Date();
    const year = currentYear.getFullYear();

    return year - this.yearOfBirth;
  }
  printAll() {
    console.log(`pelo - ${this.colorPelo}`);
    console.log(`Ojos - ${this.colorOjos}`);
    console.log(`height - ${this.height}`);
    console.log(`width - ${this.width}`);
    console.log(`yearOfBirth - ${this.yearOfBirth}`);
    console.log(`hobbies - ${this.hobbies}`);
  }

  printHobbies() {
    console.log(this.hobbies);
  }
}

export { Person };
