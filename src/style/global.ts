import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --white: #ffff;

    --purple-100: #C67DFF;
    --purple-200: #9D4EDD;
    --purple-300: #A763F7;
    --purple-400: #5D4FB7;
    --purple-500: #7B2BBE;
    --purple-600: #230147;

    --gray-100: #d9d9d934;
    --gray-200: #E9E9F1;
    --gray-300: #808080
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        font-family: 'Arial', sans-serif;
    }

    input, textarea, button{
        font-weight: 400;
        font-size: 1rem;
    }


`;
