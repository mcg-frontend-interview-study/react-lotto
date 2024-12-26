import * as Styled from './InputGroup.style';
import { InputGroupProps } from './InputGroup.type';

export const InputGroup = ({ style, label, length, ...restProps }: InputGroupProps) => {
  return (
    <Styled.Container $gap={style?.gap}>
      <Styled.Label $textAlign={style?.textAlign}>{label}</Styled.Label>
      <Styled.InputGroup $justifyContent={style?.justifyContent}>
        {Array.from({ length }).map((_, index) => (
          <Styled.Input key={index} $width={style?.inputWidth} {...restProps} />
        ))}
      </Styled.InputGroup>
    </Styled.Container>
  );
};
