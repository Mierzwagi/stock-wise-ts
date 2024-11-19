import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 66%;
  height: 40%;

  @media (max-width: 1200px) {
    margin-top: 4rem;
  }
`;
export const SignInTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
 

  input {
    background-color: var(--gray-200);
    padding: 0.6rem;
    width: 80%;
  }


  button {
    //background-image: var(--gradient);
    background-color: var(--purple-300);
    width: 6rem;
    height: 2.4rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: var(--white);

    &:hover {
      background-color: transparent;
      color: var(--black);
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      border: 3px solid var(--purple-400);
    }
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PasswordInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
  }
`;
