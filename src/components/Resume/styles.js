import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3.2rem;

  width: 100%;
  height: 22.2rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_200};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 1.6rem;

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    overflow-y: auto;
  }
`;

export const Stars = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1.5rem;

  > svg {
    width: 1.2rem;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin-right: 0.6rem;
  }
`;
