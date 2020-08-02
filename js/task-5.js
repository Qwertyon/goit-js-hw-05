class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.carObj.maxSpeed}, speed: ${car.carObj.speed}, isOn: ${car.carObj.isOn}, distance: ${car.carObj.distance}, price: ${car.carObj.price}`
    );
  }
  constructor(carObj) {
    this.carObj = carObj;
    this.carObj.speed = 0;
    this.carObj.isOn = false;
    this.carObj.distance = 0;
  }
  get price() {
    return this.carObj.price;
  }

  set price(value) {
    this.carObj.price = value;
  }
  turnOn() {
    this.carObj.isOn = true;
  }
  turnOff() {
    this.carObj.isOn = false;
    this.carObj.speed = 0;
  }
  accelerate(value) {
    if (this.carObj.maxSpeed > this.carObj.speed + value) {
      this.carObj.speed += value;
    }
  }
  decelerate(value) {
    if (this.carObj.speed - value > 0) {
      this.carObj.speed -= value;
    }
  }
  drive(hours) {
    this.carObj.distance += hours * this.carObj.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
