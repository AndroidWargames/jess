class Potato {
  constructor() {
    this.name = "potato";
  }
  whatAmI() {
    return this.name;
  }
}
p = new Potato()
console.log(p.whatAmI());
