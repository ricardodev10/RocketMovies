import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 0 auto;
    padding: 4rem 11.5rem 8.5rem;

    .stars {
      display: flex;
      align-items: center;

      h1 {
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
        margin-right: 1.6rem;

        font-size: 3.6rem;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      > svg {
        width: 2rem;
        height: 2rem;

        margin-right: 1rem;

        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
    }

    .date {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 1.6rem;
        border-radius: 50%;
      }

      svg {
        width: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
    }

    .tags {
      display: flex;
      gap: 0.8rem;
      margin: 4rem 0;
    }

    p {
      overflow-y: auto;
      height: 70rem;

      &::-webkit-scrollbar {
        width: 7px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK_100};
        border-radius: 7px;
      }
    }
  }
`;
