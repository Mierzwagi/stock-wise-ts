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

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const HeaderInput = styled.input`
  padding: 8px;
  border: none;
  width: 12%;
  background-color: transparent;
  border-bottom: solid 1px var(--purple-200);
  @media (max-width: 700px) {
    width: 24%;
  }
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
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10rem;
  width: 100%;

  h3 {
    font-size: 1.2rem;

    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
  height: 84%;
  @media (max-width: 700px) {
    margin-top: 2rem;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

 
`;
