import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 64px;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title}
  color: ${({ theme }) => theme.color.grayScale1}
`;
