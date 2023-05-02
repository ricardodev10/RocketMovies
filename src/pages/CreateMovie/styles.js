import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 0 auto;
    padding: 4rem 11.5rem 8.5rem;

    h1 {
      margin-top: 2.4rem;
      margin-bottom: 4rem;

      font-size: 3.6rem;
      font-weight: 500;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .inputs {
      display: flex;
      gap: 4rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_200};

      margin-bottom: 2.4rem;
    }
    
    .marcadores {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 0.8rem;
      padding: 1.6rem;
      margin-bottom: 5.6rem;

      > div {
        display: flex;
        gap: 2.4rem;

        span {
          border-radius: 1rem;
          padding: 1.6rem;
          display: flex;
          align-items: center;
          gap: 1.6rem;

          svg {
            color: ${({ theme }) => theme.COLORS.PINK_100};
            cursor: pointer;
          }
        }

        span:nth-child(1) {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }

        span:nth-child(2) {
          background-color: transparent;
          border: 2px dashed ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
      }
    }

    .buttons {
      display: flex;
      gap: 4rem;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 1rem;
  border: none;

  padding: 1.9rem 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin-top: 3.2rem;
  margin-bottom: 4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
