import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    border-radius: 0.8rem;
    padding: 0.5rem 1.6rem;
`;