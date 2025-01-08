import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 14px;

  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  ${({ theme }) => theme.typography.caption};
  color: ${({ theme }) => theme.color.grayScale1};

  &:active {
    background-color: ${({ theme }) => theme.color.primaryVariants};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.grayScale3};
  }
`;
