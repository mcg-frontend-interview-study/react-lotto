import * as S from './WinnerInput.styled';
import useLottoContext from '../../../hooks/useLottoContext';
import useValidateRange from '../../../hooks/useValidateRange';
import useValidateNumbersLength from '../../../hooks/useValidateNumbersLength';
import useValidateNumber from '../../../hooks/useValidateNumber';
import { LOTTO } from '../../../constants/lotto';

function WinnerInput() {
  const { winningNumbers, bonusNumber, setWinningNumbers, setBonusNumber } =
    useLottoContext();
  const { validateNumber } = useValidateNumber();
  const { validateRange } = useValidateRange();
  const { validateNumbersLength } = useValidateNumbersLength();

  const handleWinningNumberChange = (index: number, value: string) => {
    if (!validateNumber(value)) return;
    if (!validateRange(Number(value), LOTTO.MIN, LOTTO.MAX)) return;

    const newWinningNumbers = [...winningNumbers];
    newWinningNumbers[index] = value;
    setWinningNumbers(newWinningNumbers);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('실행');
    console.log(winningNumbers);
    if (!validateNumbersLength(winningNumbers)) return;
    console.log('됨');
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.LabelText>
        지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.
      </S.LabelText>
      <>
        <S.LabelText>당첨 번호</S.LabelText>
        {winningNumbers.map((number, index) => (
          <input
            key={index}
            value={number}
            onChange={(e) => handleWinningNumberChange(index, e.target.value)}
          />
        ))}
      </>
      <>
        <S.LabelText>보너스 번호</S.LabelText>
        <input
          value={bonusNumber}
          onChange={(e) => setBonusNumber(e.target.value)}
        />
      </>

      <button type="submit">결과 확인하기</button>
    </form>
  );
}

export default WinnerInput;
