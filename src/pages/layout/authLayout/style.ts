import styled from "styled-components";

export const SignContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundDivContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

interface BackgroundDivProps {
  variant: "start" | "end";
}

export const BackgroundDiv = styled.div<BackgroundDivProps>`
  background-image: var(--gradient);
  width: 37.5rem;
  height: 26.25rem;
  border-radius: 40%;

  ${(props) =>
    props.variant === "start"
      ? "align-self: flex-start"
      : "align-self: flex-end"}
`;

export const AuthContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;

  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 17px 15px 10px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50%;
    align-self: flex-end;
  }
`;

export const AuthContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    background-image: var(--gradient-dark);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    position: absolute;
    margin-bottom: 24rem;
    font-size: 4rem;
  }
`;

//align-self: flex-end;
