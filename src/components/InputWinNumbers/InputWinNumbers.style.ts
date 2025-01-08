import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.body};
`;

export const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;
