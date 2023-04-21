import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    margin: 0 15rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    > p {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin: 4.8rem 0;
    }

    > a {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PINK_100};

        margin-top: 4.2rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;