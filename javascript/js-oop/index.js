function Person(name) {
  this.name = name;
  let age = function () {
    console.log(20);
  };
  this.details = function () {
    console.log(`Person name is ${this.name} `);
    age();
  };
}
let p1 = new Person("hamza");
p1.details();
