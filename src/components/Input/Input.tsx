import * as Styled from './Input.style';
import { InputProps } from './Input.type';

export const Input = ({ label, gap, ...restProps }: InputProps) => {
  return (
    <Styled.Container $gap={gap}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input {...restProps} />
    </Styled.Container>
  );
};
