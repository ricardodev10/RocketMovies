import styled from "styled-components";

export const Container = styled.div`

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;
