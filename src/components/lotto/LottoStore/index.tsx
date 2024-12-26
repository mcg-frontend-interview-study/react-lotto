import * as S from './styles';
import { MoneyPanel } from '../index';

interface LottoStoreProps {
  setMoney: (value: number) => void;
}

const LottoStore = ({ setMoney }: LottoStoreProps) => {
  return (
    <S.LottoStore>
      <S.StoreTitle>내 번호 당첨 확인</S.StoreTitle>
      <MoneyPanel setMoney={setMoney} />
    </S.LottoStore>
  );
};

export default LottoStore;
