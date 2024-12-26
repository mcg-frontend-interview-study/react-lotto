import { LOTTO } from '../constants/lotto';

export const getRandomNumbers = (count: number): number[][] => {
  const result: number[][] = [];

  for (let i = 0; i < count; i++) {
    const randomNumbers = [];
    for (let j = 0; j < LOTTO.COUNT; j++) {
      randomNumbers.push(Math.floor(Math.random() * LOTTO.MAX));
    }
    result.push(randomNumbers);
  }
  return result;
};
