import styled from "styled-components";


export const ButtonRoundStyle = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: var(--purple-100);
    border: none;
    border-radius: 100%;
    cursor: pointer;

    @media (max-width: 1200px) {
    display: none;
  }
`

