import styled from "styled-components";


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