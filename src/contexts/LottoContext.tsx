import { createContext, useState } from 'react';
import { RandomNumbersType } from '../types/randomNumbers';

interface LottoContextProps {
  inputAmountValue: string;
  setInputAmountValue: (amount: string) => void;
  lottoNumbers: RandomNumbersType;
  lottoCount: number;
  setLottoNumbers: (numbers: RandomNumbersType) => void;
  setLottoCount: (count: number) => void;
  winningNumbers: string[];
  bonusNumber: string;
  setWinningNumbers: (numbers: string[]) => void;
  setBonusNumber: (number: string) => void;
}

const LottoContext = createContext<LottoContextProps | undefined>(undefined);

export const LottoProvider = ({ children }: React.PropsWithChildren) => {
  const [inputAmountValue, setInputAmountValue] = useState('');
  const [lottoNumbers, setLottoNumbers] = useState<RandomNumbersType>({});
  const [lottoCount, setLottoCount] = useState<number>(0);
  const [winningNumbers, setWinningNumbers] = useState(Array(6).fill(''));
  const [bonusNumber, setBonusNumber] = useState('');

  return (
    <LottoContext.Provider
      value={{
        inputAmountValue,
        setInputAmountValue,
        lottoNumbers,
        lottoCount,
        setLottoNumbers,
        setLottoCount,
        winningNumbers,
        setWinningNumbers,
        bonusNumber,
        setBonusNumber,
      }}
    >
      {children}
    </LottoContext.Provider>
  );
};

export default LottoContext;
