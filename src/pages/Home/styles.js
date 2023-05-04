import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

    height: 100vh;
    
  > main {
    grid-area: content;
    margin: 0 auto;
    padding: 4.8rem 11.5rem 0;

    width: 100%;
    overflow-y: auto;

    > div {
      display: flex;
      justify-content: space-between;

      margin-bottom: 3.8rem;

      a {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

      h1 {
        white-space: nowrap;
      }
    }
  }
`;

export const Button = styled.button`
  width: 20rem;
  height: 5.6rem;

  border-radius: 1rem;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 1.6rem;
  }
`;