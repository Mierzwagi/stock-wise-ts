import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --white: #ffff;

    --purple-100: #C67DFF;
    --purple-200: #A763F7;
    --purple-300: #5D4FB7;
    --purple-400: #7B2BBE;
    --purple-500: #5907AF;

    --gray-100: #d9d9d934;
    --gray-200: #E9E9F1;
    }
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
