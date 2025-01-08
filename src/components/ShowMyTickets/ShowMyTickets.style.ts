import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 8px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.body};
`;

export const Tickets = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const Ticket = styled.li`
  display: flex;

  gap: 8px;

  ${({ theme }) => theme.typography.body};
`;
