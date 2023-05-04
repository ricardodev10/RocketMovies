import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 11.6rem;
    padding: 2.4rem 12.3rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    align-items: center;
    gap: 6.4rem;

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    
    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        strong {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};

            white-space: nowrap;
        }

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
    
    > a {

        img {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
        }
    }
`;