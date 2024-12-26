import * as S from './Numbers.styled';
import useLottoContext from '../../../hooks/useLottoContext';

function Numbers() {
  const { lottoNumbers, lottoCount } = useLottoContext();

  return (
    <div>
      <S.LabelText>총 {lottoCount}개를 구매하였습니다.</S.LabelText>
      {Object.entries(lottoNumbers).map(([key, values]) => (
        <div key={key}>🎟️ {values.join(', ')}</div>
      ))}
    </div>
  );
}

export default Numbers;
