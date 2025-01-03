import { LOTTO } from '../constants/lotto';
import { RandomNumbersType } from '../types/randomNumbers';

export const getRandomNumbers = (count: number): RandomNumbersType => {
  const result: RandomNumbersType = {};
  let i = 0;
  while (Object.keys(result).length !== count) {
    const randomNumbers: number[] = [];
    while (randomNumbers.length !== LOTTO.COUNT) {
      const number = Math.ceil(Math.random() * LOTTO.MAX);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    result[i] = randomNumbers;
    i++;
  }
  return result;
};
