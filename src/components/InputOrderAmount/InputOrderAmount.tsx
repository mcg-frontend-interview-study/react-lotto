import * as Styled from './InputOrderAmount.style';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const InputOrderAmount = () => {
  return (
    <Styled.Form>
      <Input label="구입할 금액을 입력해주세요." />
      <Button>구입</Button>
    </Styled.Form>
  );
};
