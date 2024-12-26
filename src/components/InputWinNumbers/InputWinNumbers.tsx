import { Button } from '../Button/Button';
import { InputGroup } from '../InputGroup/InputGroup';
import * as Styled from './InputWinNumbers.style';

export const InputWinNumber = () => {
  return (
    <Styled.Form>
      <Styled.Text>지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.</Styled.Text>
      <Styled.InputField>
        <InputGroup label="당첨 번호" length={6} style={{ inputWidth: 34 }} />
        <InputGroup
          label="보너스 번호"
          length={1}
          style={{ inputWidth: 34, justifyContent: 'flex-end', textAlign: 'right' }}
        />
      </Styled.InputField>
      <Button>결과 확인하기</Button>
    </Styled.Form>
  );
};