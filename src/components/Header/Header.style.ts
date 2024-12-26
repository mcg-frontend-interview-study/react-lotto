import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;

  padding-left: 130px;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.title}
  color: ${({ theme }) => theme.color.grayScale1}
`;
