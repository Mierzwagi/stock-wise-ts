import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --white: #ffff;
    --black: #000000;

    --purple-100: #DFB6FF;
    --purple-200: #9D4EDD;
    --purple-300: #A763F7;
    --purple-400: #5603AD;
    --purple-500: #7B2BBE;
    --purple-600: #230147;

    --gray-100: #d9d9d934;
    --gray-200: #E9E9F1;
    --gray-300: #808080;

    --gradient: linear-gradient(
        45deg,
    var(--purple-100),
    var(--purple-400),
    var(--purple-600)
    );
    --gradient-dark: linear-gradient(
       to left,
    var(--purple-600),
    var(--purple-400)
    );
    }

    :focus{
        outline: transparent;
        //box-shadow: 0 0 0 2px var(--purple-400);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        font-family: "Montserrat", sans-serif;
    }

    input, textarea, button{
        font-weight: 400;
        font-size: 1rem;
        border: 0;
        
    }

    .css-1nmdiq5-menu {
    width: auto !important;
    }

    .css-1l6chkb-option {
    background-color: #DFB6FF !important;
}

.css-1l6chkb-option:hover {
    background-color: #DFB6FF !important;
}


`;
