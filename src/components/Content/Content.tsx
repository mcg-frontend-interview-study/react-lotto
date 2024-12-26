import { ChangeEvent, useRef, useState } from 'react';
import * as S from './Content.styled';
import { getRandomNumbers } from '../../utils/getRandomNumbers';
import { LOTTO } from '../../constants/lotto';
import Numbers from './Numbers/Numbers';
import useLottoContext from '../../hooks/useLottoContext';
import WinnerInput from './WinnerInput/WinnerInput';

function Content() {
  const { lottoNumbers, setLottoNumbers, setLottoCount } = useLottoContext();
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  if (inputRef.current) {
    inputRef.current.focus();
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validatedValue = validateInputValue(inputValue);
    if (validatedValue !== undefined) {
      const count = validatedValue / 1000;
      setLottoNumbers(getRandomNumbers(count));
      setLottoCount(count);
      console.log(count);
    }
  };

  const validateInputValue = (value: string) => {
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      alert('숫자만 입력해 주세요!');
      setInputValue('');
      return;
    }
    if (numberValue < LOTTO.AMOUNT_MIN || numberValue > LOTTO.AMOUNT_MAX) {
      alert(`${LOTTO.AMOUNT_MIN} 이상 ${LOTTO.AMOUNT_MAX} 이하의 값만 입력해 주세요!`);
      setInputValue('');
      return;
    }
    if (0 < numberValue % LOTTO.AMOUNT_MIN && numberValue % LOTTO.AMOUNT_MIN < LOTTO.AMOUNT_MIN) {
      alert(`${LOTTO.AMOUNT_MIN} 단위의 금액만 입력해 주세요!`);
      setInputValue('');
      return;
    }

    return numberValue;
  };

  return (
    <S.Layout>
      <S.TitleText>🎱 내 번호 당첨 확인 🎱</S.TitleText>
      <S.InputLabelText>구입할 금액을 입력해주세요.</S.InputLabelText>

      <form onSubmit={handleSubmit}>
        <S.Input
          ref={inputRef}
          placeholder="금액"
          value={inputValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
          type="number"
        />
        <button type="submit">구입</button>
      </form>

      {Object.keys(lottoNumbers).length > 0 && (
        <>
          <Numbers />
          <WinnerInput />
        </>
      )}
    </S.Layout>
  );
}

export default Content;
