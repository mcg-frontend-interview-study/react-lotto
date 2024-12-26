import { useState } from 'react';
import { LottoTicket } from '../types/ServiceType';

export const useInputWinNumbers = () => {
  const [winNumbers, setWinNumbers] = useState<LottoTicket>([]);
  const [bonusNumber, setBonusNumber] = useState<number>(0);

  const handleWinNumbers = (winNumber: number, index: number) => {
    setWinNumbers((prev) => [...prev.slice(0, index), winNumber, ...prev.slice(index + 1)]);
  };

  const handleBonusNumber = (bonusNumber: number) => {
    setBonusNumber(bonusNumber);
  };

  return {
    winNumbers,
    bonusNumber,
    handleWinNumbers,
    handleBonusNumber,
  };
};
