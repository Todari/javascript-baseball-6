import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import REGEXP from './constants/RegExp.js';
import InputNumberError from './error/CustomError.js';

export default class MatchNumber {
  #userNumber;

  setUserNumber() {
    while (true) {
      try {
        const input = InputView.getUserNumber();

        this.#validate(input);
        this.#userNumber = input;

        break;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #validate(number) {
    if (!REGEXP.inputNumber.test(number)) {
      throw new InputNumberError();
    }
  }
}
