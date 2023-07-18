class Person__ {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class User extends Person__ {
  degree: number;
  constructor(name: string, age: number, degree: number) {
    super(name, age);
    this.degree = degree;
  }
}
let user1 = new User("r1", 20, 200);
console.log(user1.name);
