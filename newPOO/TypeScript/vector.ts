export class Vector {
  private elements: number[];

  constructor(n: number, k: number) {
    this.elements = [];
    for (let i = 0; i < n; i++) {
      this.elements.push(Math.floor(Math.random() * (k - 0 + 1)));
    }
  }

  public print(): void {
    console.log(this.elements);
  }

  public add(v1: Vector): Vector[] {
    let vectorA = new Array();
    for (let i = 0; i < this.elements.length; i++) {
      vectorA.push(this.elements[i] + v1.elements[i]);
    }
    return vectorA;
  }

  public subs(v1: Vector): Vector[] {
    let vectorA = new Array();
    for (let i = 0; i < this.elements.length; i++) {
      vectorA.push(this.elements[i] - v1.elements[i]);
    }
    return vectorA;
  }

  public mult(v1: Vector): Vector[] {
    let vectorA = new Array();
    for (let i = 0; i < this.elements.length; i++) {
      vectorA.push(this.elements[i] * v1.elements[i]);
    }
    return vectorA;
  }

  public multNumber(n: number): Vector[] {
    let vectorA = new Array();
    for (let i = 0; i < this.elements.length; i++) {
      vectorA.push(this.elements[i] * n);
    }
    return vectorA;
  }
}
