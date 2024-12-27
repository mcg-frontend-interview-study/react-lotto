import styled from '@emotion/styled';

export const LottoGame = styled.main`
  position: relative;
  top: 60px; /* header 아래로 이동 */

  display: flex;
  flex-direction: column;

  margin: 20px auto;
  text-align: center;

  width: 35%;
  height: calc(100vh - 160px);

  border: 1px solid lightgray;
`;
