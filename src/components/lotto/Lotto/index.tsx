import { lotto } from '../../../types/lotto';
import * as S from './styles';

interface LottoProps {
  lotto: lotto;
}

const Lotto = ({ lotto }: LottoProps) => {
  return (
    <S.Lotto>
      <span>📝</span>
      <span>{lotto.join(', ')}</span>
    </S.Lotto>
  );
};

export default Lotto;
