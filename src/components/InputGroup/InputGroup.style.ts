import styled from 'styled-components';

export const InputGroup = styled.div<{ $justifyContent?: string }>`
  display: flex;
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'flex-start')};

  gap: 8px;
`;

export const Input = styled.input<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: 36px;

  border: 1px solid ${({ theme }) => theme.color.grayScale3};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.grayScale5};

  &::placeholder {
    ${({ theme }) => theme.typography.placeholder};
    color: ${({ theme }) => theme.color.grayScale4};
  }
`;

export const Label = styled.label<{ $textAlign?: string }>`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.grayScale5};

  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : 'left')};
`;

export const Container = styled.fieldset<{ $gap?: number }>`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: ${({ $gap = 4 }) => `${$gap}px`};
`;
