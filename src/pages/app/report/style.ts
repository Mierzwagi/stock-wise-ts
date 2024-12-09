import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  h1 {
    text-align: center;
    background-image: var(--gradient-dark);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }


`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
 
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SelectInput = styled.select`
  border: 0;
  border-radius: 8px;
  color: var(--gray-300);
  background-color: var(--purple-100);
  cursor: pointer;
  padding: 0.8rem;

  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    width: 60%;
  }

  &:focus {
    outline: none;
  }

  option:checked {
    background-color: var(--puple-100);
    color: white;
  }

  option {
    background-color: white;
    color: black;

    &:hover {
      background-color: red;
      color: white;
    }
  }
`;

export const DateInput = styled.input.attrs({ type: "month" })`
  background-color: var(--purple-100);
  padding: 0.4rem;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 80%;
`;

export const PaginationButton = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
