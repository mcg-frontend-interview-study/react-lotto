import * as S from './styles';
import { LottoStore, LottoDisplay, WinningLottoPanel } from '../index';
import { useState } from 'react';
import { LOTTO_PRICE, LOTTO_INFO } from '../../constants/lotto';
import useLottos from '../../../hooks/useLottos';
import { lotto, WinningLotto } from '../../../types/lotto';

const LottoGame = () => {
  const [money, setMoney] = useState(0);
  const lottoCount = money / LOTTO_PRICE;
  const { lottos = [] } = useLottos({ lottoCount });
  const [winningLotto, setWinningLotto] = useState<WinningLotto>();

  const setValidateMoney = (value: number) => {
    if (value % LOTTO_PRICE !== 0) {
      alert('금액은 1000원 단위의 양수여야 합니다.');
      return;
    }

    setMoney(value);
  };

  const setValidWinningLotto = (numbers: number[], bonusNumber: number) => {
    const totalNumber = [...numbers, bonusNumber];

    console.log(totalNumber);

    if (new Set(totalNumber).size !== totalNumber.length) {
      alert('로또 번호는 중복될 수 없습니다.');
      return;
    }

    if (!totalNumber.every((num) => num <= LOTTO_INFO.end && num >= LOTTO_INFO.start)) {
      alert('로또 번호는 1 ~ 45 사이의 숫자입니다.');
      return;
    }

    // 값 가공... 아니면 그냥 이렇게 따로 쓸까?

    //setWinningLotto(value)
  };

  const isLottoGenerated = money > 0 && lottos.length === lottoCount;

  return (
    <S.LottoGame>
      <LottoStore setMoney={setValidateMoney} />
      {isLottoGenerated && <LottoDisplay lottoCount={lottoCount} lottos={lottos} />}
      {isLottoGenerated && <WinningLottoPanel setWinningNumber={setValidWinningLotto} />}
    </S.LottoGame>
  );
};

export default LottoGame;
