import { LOTTO } from '../constants/lotto';
import { RandomNumbersType } from '../types/randomNumbers';

export const getRandomNumbers = (count: number): RandomNumbersType => {
  const result: RandomNumbersType = {};

  for (let i = 1; i < count + 1; i++) {
    const randomNumbers: number[] = [];
    for (let j = 0; j < LOTTO.COUNT; j++) {
      randomNumbers.push(Math.floor(Math.random() * LOTTO.MAX));
    }
    result[i] = randomNumbers;
  }
  return result;
};
