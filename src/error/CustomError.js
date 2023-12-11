import ERROR from '../constants/Error.js';

export class NumberTypeError extends Error {
  constructor(input) {
    super(ERROR.numberType(input));
  }
}

export class NumberDuplicatedError extends Error {
  constructor(input) {
    super(ERROR.numberDuplicated(input));
  }
}
