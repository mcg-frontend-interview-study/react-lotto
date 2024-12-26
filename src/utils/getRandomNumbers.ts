import { LOTTO } from '../constants/lotto';
import { RandomNumbersType } from '../types/randomNumbers';

export const getRandomNumbers = (count: number): RandomNumbersType => {
  const result: RandomNumbersType = {};

  for (let i = 0; i < count; i++) {
    const randomNumbers: number[] = [];
    for (let j = 0; j < LOTTO.COUNT; j++) {
      const number = Math.ceil(Math.random() * LOTTO.MAX);
      randomNumbers.push(number);
    }
    result[i] = randomNumbers;
  }
  return result;
};
