import styled from "styled-components";

interface ToggleProps {
  isOn: boolean;
}

export const Toggle = styled.div<ToggleProps>`
  width: 60px;
  height: 30px;
  background-color: ${(props) =>
    props.isOn === true ? "var(--purple-100)" : "var(--gray-200)"};
  border-radius: 30px;
  transition: background-color 300ms linear;

  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:before {
    content: "${(props) => (props.isOn === true ? "" : "")}";
    width: 25px;
    height: 25px;
    background-color: var(--purple-400);
    border-radius: 50%;
    position: absolute;
    transition: left 400ms linear;

    display: flex;
    align-items: center;
    justify-content: center;
    left: ${(props) => (props.isOn === true ? "30px" : "0")};
  }
`;

export const SignInContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const SignInTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    background-color: var(--gray-100);
    padding: 0.5rem;
  }

  button {
    background-image: var(--gradient);
    width: 6rem;
    height: 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: var(--white);
  }
`;

export const SwhichConteiner = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;