import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message';

export default class InputView {
  static async getUserNumber() {
    const input = await Console.readLineAsync(MESSAGE.getUserNumber);
    return input;
  }
}
