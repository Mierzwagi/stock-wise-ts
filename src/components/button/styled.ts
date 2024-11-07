import styled from "styled-components";


export const ButtonRoundStyle = styled.button`
    width: 60px;
    height: 60px;
    background-color: var(--purple-100);
    border: none;
    border-radius: 100%;
    /* float: right;
    margin-right: 0.7rem; */
    cursor: pointer;

    @media (max-width: 1200px) {
    display: none;
  }
`