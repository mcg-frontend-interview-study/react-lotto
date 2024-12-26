import { useState } from 'react';

export const useBuyLotto = () => {
  const [amountInput, setAmountInput] = useState<string>('');
  const [lottoTickets, setLottoTickets] = useState<number[][]>([]);

  const lottoCounts = Math.floor(Number(amountInput) / 1000);

  const buyLotto = () => {
    createLottoTickets();
    setAmountInput('');
  };

  const generateLottoNumbers = () => {
    const lottoNumbers = new Set<number>();

    while (lottoNumbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      lottoNumbers.add(randomNum);
    }

    return Array.from(lottoNumbers);
  };

  const createLottoTickets = () => {
    setLottoTickets(Array.from({ length: lottoCounts }).map(() => generateLottoNumbers()));
  };

  return {
    amountInput,
    setAmountInput,
    buyLotto,
    lottoTickets,
  };
};
