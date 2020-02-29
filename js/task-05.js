'use strict';

class Car {
  constructor(obj) {
    this.speed = 0;
    this._price = obj.price;
    this.maxSpeed = obj.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(obj) {
    console.log(
      `Max. speed: ${obj.maxSpeed}, Speed: ${obj.speed},  isOn: ${obj.isOn}, distance: ${obj.distance}, price: ${obj._price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(amount) {
    return (this._price = amount);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (Number(this.speed) + value <= this.maxSpeed) {
      this.speed = this.speed + value;
      return this.speed;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed = this.speed - value;
      return this.speed;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = this.distance + this.speed * hours;
      return this.distance;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
