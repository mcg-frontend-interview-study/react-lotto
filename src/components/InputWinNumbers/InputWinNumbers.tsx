import { useInputWinNumbers } from '../../hooks/useInputWinNumbers';
import { Button } from '../Button/Button';
import { InputGroup } from '../InputGroup/InputGroup';
import * as Styled from './InputWinNumbers.style';

export const InputWinNumber = () => {
  const { handleWinNumbers, handleBonusNumber, canSubmit } = useInputWinNumbers();

  return (
    <Styled.Form>
      <Styled.Text>지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.</Styled.Text>
      <Styled.InputField>
        <InputGroup
          label="당첨 번호"
          length={6}
          maxLength={2}
          style={{ inputWidth: 34 }}
          handleInput={handleWinNumbers}
        />
        <InputGroup
          handleInput={handleBonusNumber}
          label="보너스 번호"
          length={1}
          maxLength={2}
          style={{ inputWidth: 34, justifyContent: 'flex-end', textAlign: 'right' }}
        />
      </Styled.InputField>
      <Button disabled={!canSubmit}>결과 확인하기</Button>
    </Styled.Form>
  );
};
