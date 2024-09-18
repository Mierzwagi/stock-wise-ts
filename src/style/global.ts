import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoonthing: antialiased;
    }

    border-style, input-security, textarea, button{
        font-weight: 400;
        font-size: 1rem;
    }


`;
