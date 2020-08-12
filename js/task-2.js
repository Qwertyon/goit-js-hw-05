class User {
  constructor(obj) {
    this.obj = obj;
  }
  getInfo = function () {
    console.log(
      `USer ${this.obj.name} is ${this.obj.age} years old and has ${this.obj.followers} followers`
    );
  };
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango.getInfo();

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo();
