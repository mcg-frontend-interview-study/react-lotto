import * as S from './styles';
import { LottoStore } from '../index';
import { useState } from 'react';
import { LOTTO_PRICE } from '../../constants/lotto';

type lotto = number[];

const LottoGame = () => {
  const [money, setMoney] = useState();
  const [lottos, setLottos] = useState<lotto[]>();
  const [winningLotto, setWinningLotto] = useState<lotto>();

  const setValidateMoney = (value: number) => {
    if (value % LOTTO_PRICE !== 0) {
      alert('금액은 1000원 단위의 양수여야 합니다.');
      return;
    }

    setMoney(money); 
  };

  return (
    <S.LottoGame>
      <LottoStore setMoney={setValidateMoney} />
    </S.LottoGame>
  );
};

export default LottoGame;
