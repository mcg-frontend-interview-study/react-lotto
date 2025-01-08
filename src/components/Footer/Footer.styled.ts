import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Layout = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  background-color: ${theme.color.greyScale1};
  padding: 28px;

  border-top: 1px solid rgba(78, 91, 166, 0.2);

  font-size: ${theme.fontSize.caption};
  font-weight: ${theme.fontWeight.caption};
  color: ${theme.color.blue};
`;
