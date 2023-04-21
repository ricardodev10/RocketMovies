import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
