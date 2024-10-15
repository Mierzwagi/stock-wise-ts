import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 66%;
  height: 40%;
`;
export const SignInTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    background-color: var(--gray-200);
    padding: 0.6rem;
  }

  button {
    background-image: var(--gradient);
    width: 6rem;
    height: 2.4rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: var(--white);
  }
`;

export const SwhichConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
