import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.caption}
  color: ${({ theme }) => theme.color.primary}
`;
