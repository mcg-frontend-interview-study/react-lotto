import { lotto } from '../../../types/lotto';
import * as S from './styles';
import nong from '../../../assets/image.png';


interface LottoProps {
  lotto: lotto;
}

const Lotto = ({ lotto }: LottoProps) => {
  return (
    <S.Lotto>
      <S.LottoImg src={nong} alt="" />
      <span>{lotto.join(', ')}</span>
    </S.Lotto>
  );
};

export default Lotto;
