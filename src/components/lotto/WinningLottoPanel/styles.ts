import styled from '@emotion/styled';

export const WinningLottoPanel = styled.article`
  display: flex;
  flex-direction: column;

  margin: 0 15px;
`;

export const GuideMessage = styled.p`
  font-size: 13px;
  text-align: left;

  margin-bottom: 20px;
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface NumberContainerStyleProps {
  $inputStyle?: React.CSSProperties;
}

export const NumberInputContainer = styled.div<NumberContainerStyleProps>`
  display: flex;
  gap: 5px;

  ${({ $inputStyle }) => $inputStyle && { ...$inputStyle }};
`;

export const NumberLabel = styled.label`
  font-size: 12px;
  text-align: left;

  margin-bottom: 8px;
`;
