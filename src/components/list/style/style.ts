import styled from "styled-components";

export const ItensContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* gap: 2rem; */
  justify-content: space-around;
`;

export const HeaderTitle = styled.div`
  width: 20%;
  padding: 0.2rem;
  border-radius: 10px;
`;
export const HeaderTitleDenominacao = styled.div`
  width: 50%;
  padding: 0.2rem;
  border-radius: 10px;
`;
export const IMG = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.6rem;
  /* gap: 2rem; */
  justify-content: space-around;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  strong {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const DenominacaoDiv = styled.div`
  width: 50%;
  background-color: var(--gray-200);
  padding: 0.2rem;
  border-radius: 10px;
`;

export const DivContainer = styled.div`
  width: 20%;
  background-color: var(--gray-200);
  padding: 0.2rem;
  border-radius: 10px;
`;

export const SelectInput = styled.select`
  width: 20%;
  padding: 0.2rem;
  border: 0;
  border-radius: 8px;
  color: var(--brack);
  background-color: var(--purple-100);
  cursor: pointer;
  padding: 0.25rem;

  display: flex;
  align-items: center;

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
