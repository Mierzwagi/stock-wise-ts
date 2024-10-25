import styled from "styled-components";

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