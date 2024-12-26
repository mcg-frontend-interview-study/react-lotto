import { ChangeEvent, useRef } from 'react';
import * as S from './Content.styled';
import { getRandomNumbers } from '../../utils/getRandomNumbers';
import Numbers from './Numbers/Numbers';
import useLottoContext from '../../hooks/useLottoContext';
import WinnerInput from './WinnerInput/WinnerInput';
import useValidateInputValue from '../../hooks/useValidateInputValue';

function Content() {
  const { lottoNumbers, setLottoNumbers, setLottoCount } = useLottoContext();
  const { inputValue, validateInputValue } = useValidateInputValue('');

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
    }
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            validateInputValue(event.target.value)
          }
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
