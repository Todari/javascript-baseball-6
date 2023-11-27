import Computer from './Computer.js';

export default class Controller {
  #computer;
  #user;

  setComputer() {
    this.#computer = new Computer();
  }
}
