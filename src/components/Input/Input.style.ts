import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 36px;

  border: 1px solid ${({ theme }) => theme.color.grayScale3};
  color: ${({ theme }) => theme.color.grayScale5};

  &::placeholder {
    ${({ theme }) => theme.typography.placeholder};
    color: ${({ theme }) => theme.color.grayScale4};
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.grayScale5};
`;

export const Container = styled.fieldset<{ $gap?: number }>`
  display: flex;
  flex-direction: column;

  gap: ${({ $gap = 4 }) => `${$gap}px`};
`;
