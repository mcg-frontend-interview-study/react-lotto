import { createContext, useState } from 'react';
import { RandomNumbersType } from '../types/randomNumbers';

interface LottoContextProps {
  lottoNumbers: RandomNumbersType;
  lottoCount: number;
  setLottoNumbers: (numbers: RandomNumbersType) => void;
  setLottoCount: (count: number) => void;
}

const LottoContext = createContext<LottoContextProps | undefined>(undefined);

export const LottoProvider = ({ children }: React.PropsWithChildren) => {
  const [lottoNumbers, setLottoNumbers] = useState<RandomNumbersType>({});
  const [lottoCount, setLottoCount] = useState<number>(0);

  return (
    <LottoContext.Provider value={{ lottoNumbers, lottoCount, setLottoNumbers, setLottoCount }}>
      {children}
    </LottoContext.Provider>
  );
};

export default LottoContext;
