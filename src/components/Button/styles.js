import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    border-radius: 1rem;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-weight: 500;
`;