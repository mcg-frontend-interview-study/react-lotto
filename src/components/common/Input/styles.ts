import styled from '@emotion/styled';
import { InputStyleProps } from '.';

export const Input = styled.input<InputStyleProps>`
  padding: 12px 16px;

  font-size: 13px;

  border: 1px solid lightgray;
  border-radius: 3px;
  outline-color: #84b067;

  ::placeholder {
    color: lightgray;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ${({ $style }) => $style && { ...$style }}
`;
