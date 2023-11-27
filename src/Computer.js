import { MissionUtils } from '@woowacourse/mission-utils';

export default class Computer {
  #number;

  constructor() {
    this.setNumber();
  }

  setNumber() {
    const number = [];

    while (number.length < 3) {
      const random = number.push(MissionUtils.Random.PickNumberInRange(1, 9));
      if (!number.includes(random)) {
        number.push(random);
      }
    }

    this.#number = number;
  }
}
