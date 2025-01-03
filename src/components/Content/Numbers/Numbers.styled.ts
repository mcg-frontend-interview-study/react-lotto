import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  overflow-y: scroll;
`;

export const LabelText = styled.p`
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.body};
  line-height: ${theme.lineHeight.body};
  color: ${theme.color.greyScale5};
`;

export const LottoNumbersText = styled.p`
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.body};
  line-height: ${theme.lineHeight.body};
`;
