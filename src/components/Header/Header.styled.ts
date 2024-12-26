import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Layout = styled.div`
  width: 100%;
  background-color: ${theme.color.blue};
  padding: 14px 130px;
`;

export const TitleText = styled.h1`
  font-size: ${theme.fontSize.title};
  font-weight: ${theme.fontWeight.title};
  color: ${theme.color.greyScale1};
`;
