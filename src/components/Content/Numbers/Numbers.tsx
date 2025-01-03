import * as S from './Numbers.styled';
import useLottoContext from '../../../hooks/useLottoContext';

function Numbers() {
  const { lottoNumbers, lottoCount } = useLottoContext();

  return (
    <S.Layout>
      <S.LabelText>총 {lottoCount}개를 구매하였습니다.</S.LabelText>
      <>
        {Object.entries(lottoNumbers).map(([key, values]) => (
          <S.LottoNumbersText key={key}>🎟️ {values.join(', ')}</S.LottoNumbersText>
        ))}
      </>
    </S.Layout>
  );
}

export default Numbers;
