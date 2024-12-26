import { useState } from 'react';

export const useBuyLotto = () => {
  const [amountInput, setAmountInput] = useState<string>('');
  const [lottoCounts, setLottoCounts] = useState<number>(0);

  const handleLottoCounts = () => {
    setLottoCounts(Math.floor(Number(amountInput) / 1000));
    setAmountInput('');
  };

  return {
    amountInput,
    setAmountInput,
    handleLottoCounts,
    lottoCounts,
  };
};
