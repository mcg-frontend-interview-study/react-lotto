import * as Styled from './InputGroup.style';
import { InputGroupProps } from './InputGroup.type';

export const InputGroup = <T,>({ style, label, length, maxLength, handleInput, ...restProps }: InputGroupProps<T>) => {
  return (
    <Styled.Container $gap={style?.gap}>
      <Styled.Label $textAlign={style?.textAlign}>{label}</Styled.Label>
      <Styled.InputGroup $justifyContent={style?.justifyContent}>
        {Array.from({ length }).map((_, index) => (
          <Styled.Input
            key={index}
            maxLength={maxLength}
            $width={style?.inputWidth}
            onChange={(event) => handleInput(event.target.value as T, index)}
            {...restProps}
          />
        ))}
      </Styled.InputGroup>
    </Styled.Container>
  );
};
