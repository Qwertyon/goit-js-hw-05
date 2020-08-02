const Account = function (obj) {
  this.obj = obj;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.obj.login}, Email: ${this.obj.email}`);
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();
