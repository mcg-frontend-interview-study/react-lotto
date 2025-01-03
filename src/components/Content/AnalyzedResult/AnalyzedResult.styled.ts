import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;

  height: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${theme.fontSize.subtitle};
  font-weight: ${theme.fontWeight.subtitle};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

export const Thead = styled.thead`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Th = styled.th`
  text-align: center;
  padding: 8px;
  font-size: ${theme.fontSize.body};
  font-weight: 600;
  line-height: ${theme.lineHeight.body};
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Td = styled.td`
  text-align: center;
  padding: 8px;
  font-size: ${theme.fontSize.body};
  line-height: ${theme.lineHeight.body};
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const YieldText = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: ${theme.fontSize.body};
  font-weight: 700;
  line-height: ${theme.lineHeight.body};
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: ${theme.fontSize.button};
  font-weight: ${theme.fontWeight.button};
  line-height: ${theme.lineHeight.button};

  border: none;
  border-radius: 4px;
  background-color: ${theme.color.blue};
  color: #ffffff;
`;
