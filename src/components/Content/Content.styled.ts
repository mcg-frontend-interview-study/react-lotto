import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 414px;
  height: 727px;

  margin: 84px auto 69px;
  padding: 32px 16px;

  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${theme.color.greyScale1};
`;

export const TitleText = styled.h2`
  font-size: ${theme.fontSize.title};
  font-weight: ${theme.fontWeight.title};
  line-height: ${theme.lineHeight.title};
  color: ${theme.color.greyScale5};
  text-align: center;
`;

export const InputLabelText = styled.p`
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.body};
  line-height: ${theme.lineHeight.body};
  color: ${theme.color.greyScale5};
`;

export const Input = styled.input`
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
