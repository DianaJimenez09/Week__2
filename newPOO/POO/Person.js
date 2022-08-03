class Person {
  constructor(colorPelo, colorOjos, peso, altura, anyoNacimiento, []) {
    this.colorPelo = colorPelo;
    this.colorOjos = colorOjos;
    this.width = peso;
    this.height = altura;
    this.yearOfBirth = anyoNacimiento;
    this.hobbies = [];
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
    for (let i = 0; i < this.hobbies.length; i++) {
      return this.hobbies;
    }
  }
}

export { Person };
