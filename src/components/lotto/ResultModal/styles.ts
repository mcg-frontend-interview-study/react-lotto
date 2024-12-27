import styled from '@emotion/styled';

export const ResultModal = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 400px;
  height: 580px;

  z-index: 999;

  border-radius: 3.5px;
  background-color: white;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 10px;
`;

export const Title = styled.h1`
  text-align: center;

  margin-bottom: 35px;

  font-size: 26px;
  font-weight: bold;
`;

export const ResultTable = styled.table`
  margin: 0 20px 35px 20px;

  border-block: 1.5px solid lightgray;

  thead {
    font-weight: bold;
  }

  th,
  td {
    padding: 15px;
    text-align: center;
  }

  tr {
    margin: 0 5px;
    border-bottom: 1.5px solid lightgray;
  }
`;

export const RateLabel = styled.p`
  font-weight: bold;
  text-align: center;
  margin-bottom: 35px;
`;
