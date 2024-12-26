import styled from 'styled-components';

export const DimmedLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  background-color: #00000080;
`;

export const Modal = styled.section`
  display: flex;
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.color.grayScale1};

  width: 350px;
  height: 500px;

  border-radius: 4px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;
