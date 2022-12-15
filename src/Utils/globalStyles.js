import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        position: relative;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        color: white;
        background-color: rgb(22, 28, 37);
    }

    button, inout, textarea {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: white;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
`

export default GlobalStyle