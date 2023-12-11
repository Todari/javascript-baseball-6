import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import REGEXP from './constants/RegExp.js';
import { NumberDuplicatedError, NumberTypeError } from './error/CustomError.js';
import SETTING from './constants/Setting.js';

export default class MatchNumber {
  #userNumber;

  setUserNumber() {
    while (true) {
      try {
        const input = InputView.getUserNumber();

        this.#validate(input);
        this.#userNumber = [...Number(input.split())];

        break;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #validate(number) {
    if (!REGEXP.inputNumber.test(number)) {
      throw new NumberTypeError(number);
    }

    if (Set(number.split()).size !== SETTING.numberLength) {
      throw new NumberDuplicatedError(number);
    }
  }
}
