import * as S from './WinnerInput.styled';
import useLottoContext from '../../../hooks/useLottoContext';
import useValidateRange from '../../../hooks/useValidateRange';
import useValidateNumbersLength from '../../../hooks/useValidateNumbersLength';
import useValidateNumber from '../../../hooks/useValidateNumber';
import { LOTTO } from '../../../constants/lotto';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import AnalyzedResult from '../AnalyzedResult/AnalyzedResult';

function WinnerInput() {
  const {
    winningNumbers,
    bonusNumber,
    setWinningNumbers,
    setBonusNumber,
    setInputAmountValue,
  } = useLottoContext();
  const { validateNumber } = useValidateNumber();
  const { validateRange } = useValidateRange();
  const { validateNumbersLength } = useValidateNumbersLength();
  const { openModal, closeModal, isModalOpen } = useModal();

  const handleWinningNumberChange = (index: number, value: string) => {
    const newWinningNumbers = [...winningNumbers];
    newWinningNumbers[index] = value;
    setWinningNumbers(newWinningNumbers);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 당첨 번호 검증
    {
      const isInvalid = winningNumbers.some((number) => {
        if (!validateNumber(number)) return true;
        if (!validateRange(Number(number), LOTTO.MIN, LOTTO.MAX)) return true;
        return false;
      });
      if (isInvalid) return;
    }
    if (!validateNumbersLength(winningNumbers, LOTTO.COUNT)) return;

    // 보너스 번호 검증
    if (!validateNumber(bonusNumber)) return;
    if (!validateRange(Number(bonusNumber), LOTTO.MIN, LOTTO.MAX)) return;
    if (!validateNumbersLength([bonusNumber], LOTTO.MIN_COUNT)) return;

    openModal();
  };

  const handleCloseModal = () => {
    setInputAmountValue('');
    setWinningNumbers([]);
    setBonusNumber('');
    closeModal();
    window.location.reload();
  };

  return (
    <>
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
              type="number"
              onChange={(e) => handleWinningNumberChange(index, e.target.value)}
            />
          ))}
        </>
        <>
          <S.LabelText>보너스 번호</S.LabelText>
          <input
            value={bonusNumber}
            type="number"
            onChange={(e) => setBonusNumber(e.target.value)}
          />
        </>

        <button type="submit">결과 확인하기</button>
      </form>

      <Modal isOpen={isModalOpen}>
        <AnalyzedResult onClose={handleCloseModal} />
      </Modal>
    </>
  );
}

export default WinnerInput;
