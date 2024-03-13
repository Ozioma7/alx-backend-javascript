import { Car } from './10-car.js';

export class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Create a new Car instance instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}