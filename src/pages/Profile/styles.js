import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    background-color: ${({ theme }) => theme.COLORS.PINK_200};
    height: 14.4rem;

    display: flex;
    align-items: center;

    a {
      margin-left: 14.4rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: -9rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > div:nth-child(5) {
    margin-bottom: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
        display: none;
    }


    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
