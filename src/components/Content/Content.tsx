import { ChangeEvent, useEffect, useRef } from 'react';
import * as S from './Content.styled';
import { getRandomNumbers } from '../../utils/getRandomNumbers';
import Numbers from './Numbers/Numbers';
import useLottoContext from '../../hooks/useLottoContext';
import WinnerInput from './WinnerInput/WinnerInput';
import useValidateInputValue from '../../hooks/useValidateInputValue';

function Content() {
  const {
    inputAmountValue,
    setInputAmountValue,
    lottoNumbers,
    setLottoNumbers,
    setLottoCount,
  } = useLottoContext();
  const { validateInputValue, isValid } =
    useValidateInputValue(inputAmountValue);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const validatedValue = validateInputValue(inputAmountValue);
    if (validatedValue !== undefined) {
      const count = validatedValue / 1000;
      setLottoNumbers(getRandomNumbers(count));
      setLottoCount(count);
    }
  };

  return (
    <S.Layout>
      <S.SubTitleText>🎱 내 번호 당첨 확인 🎱</S.SubTitleText>
      <form onSubmit={handleSubmit}>
        <S.InputBox>
          <S.InputLabelText>구입할 금액을 입력해주세요.</S.InputLabelText>
          <S.InputButtonBox>
            <S.Input
              ref={inputRef}
              type="number"
              placeholder="금액"
              value={inputAmountValue}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInputAmountValue(event.target.value)
              }
            />
            <S.InputButton type="submit">구입</S.InputButton>
          </S.InputButtonBox>
        </S.InputBox>
      </form>

      {isValid && Object.keys(lottoNumbers).length > 0 && (
        <>
          <Numbers />
          <WinnerInput />
        </>
      )}
    </S.Layout>
  );
}

export default Content;
