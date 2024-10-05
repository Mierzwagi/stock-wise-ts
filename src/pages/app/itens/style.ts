import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
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
