import styled from '@emotion/styled';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 10px;

  color: white;
  background-color: #84b067;

  border: 1px solid lightgray;
  border-radius: 1px;

  ${({ $style }) => $style && { ...$style }};
`;
