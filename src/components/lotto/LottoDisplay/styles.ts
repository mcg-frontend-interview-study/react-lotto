import styled from '@emotion/styled';

export const LottoDisplay = styled.article`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const GuideMessage = styled.p`
  font-size: 13px;
  text-align: left;

  margin-left: 12px;
  margin-bottom: 16px;
`;

export const LottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  box-sizing: content-box;

  margin-left: 10px;
  max-height: 150px;

  overflow: auto;

  /* 스크롤바 전체 */
  ::-webkit-scrollbar {
    width: 9px; /* 스크롤바 너비 */
    height: 10px; /* 가로 스크롤바 높이 */
  }

  /* 스크롤바 트랙 (배경) */
  ::-webkit-scrollbar-track {
    background: #f0f0f0; /* 밝은 배경 */
    border-radius: 4px; /* 둥근 모서리 */
  }

  /* 스크롤바 썸(핸들) */
  ::-webkit-scrollbar-thumb {
    background: #ccc; /* 스크롤 핸들 색상 */
    border-radius: 4px; /* 둥근 모서리 */
  }

  /* 스크롤바 썸(핸들) 호버 상태 */
  ::-webkit-scrollbar-thumb:hover {
    background: #aaa; /* 호버 시 색상 변경 */
  }
`;
