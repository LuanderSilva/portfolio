import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #16161A;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
    }

    /* largura */

    .grid-layout {
        max-width: 1140px;
        margin: 0 auto;
    }
`