class Person {
  constructor(colorPelo, colorOjos, altura, peso, anyoNacimiento) {
    this.colorPelo = colorPelo;
    this.colorOjos = colorOjos;
    this.height = altura;
    this.width = peso;
    this.genero;
    this.edad;
    this.nacionalidad;
    this.yearOfBirth = anyoNacimiento;
  }

  calcIMC() {
    return (this.height * this.width) / 100;
  }

  calcEdad() {
    const currentYear = new Date();
    const year = currentYear.getFullYear();
    console.log(year);

    return year - this.yearOfBirth;
  }
}

const persona1 = new Person("rojo", "Marrones", 174, 80, 1980);

console.log(persona1.calcIMC());

console.log(persona1.calcEdad());
