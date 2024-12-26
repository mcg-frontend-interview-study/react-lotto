import { useState } from 'react';
import { LottoTicket } from '../types/ServiceType';

export const useBuyLotto = () => {
  const [amountInput, setAmountInput] = useState<string>('');
  const [lottoTickets, setLottoTickets] = useState<LottoTicket[]>([]);

  const lottoCounts = Math.floor(Number(amountInput) / 1000);

  const validateBuyLotto = () => {
    return Number(amountInput) % 1000 === 0;
  };

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

    return Array.from(lottoNumbers).sort((a, b) => a - b);
  };

  const createLottoTickets = () => {
    if (!validateBuyLotto()) {
      alert('구입 금액은 1000원 단위로 입력 가능합니다.');
      return;
    }
    setLottoTickets(Array.from({ length: lottoCounts }).map(() => generateLottoNumbers()));
  };

  return {
    amountInput,
    setAmountInput,
    buyLotto,
    lottoTickets,
  };
};
