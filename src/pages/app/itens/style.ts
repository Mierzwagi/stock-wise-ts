import styled from "styled-components";

export const ListItensContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectInput = styled.select`
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;
  color: var(--gray-300);
  background-color: var(--purple-100);
  cursor: pointer;
  padding: 0.8rem;

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

export const IntensListContainer = styled.div`
  h3 {
    font-size: 1.2rem;
  }
`;

export const ItensTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 7.8rem;

  width: 100%;
`;
export const DenominacaoH4 = styled.h4`
  width: 42%;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 80%;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

`;
